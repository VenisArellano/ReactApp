import {useEffect, useState} from "react";
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";
import {firestore} from "./Firebase";

/* Contenido de la Pagina */

const ItemListContainer = ({informacion}) => {

    const [productos,setProductos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      const collection = firestore.collection("productos")

      if(!id){
        const query = collection.get()

        query.then((resultados) => {
          const listado = []
          resultados.forEach((documento) => {
            const id = documento.id;
            const data = documento.data();
            const data_final = {id, ...data};

            listado.push(data_final)
          })
          setProductos(listado)
        })
      }
      else {
        const queryFiltrado = collection.where("tipoid", "==", id).get()
        queryFiltrado.then((categoria) => {
          const listadoFiltrado = []
          categoria.forEach((documento) => {
            const id = documento.id;
            const data = documento.data();
            const data_final = {id, ...data};
            listadoFiltrado.push(data_final)
          })
          setProductos(listadoFiltrado)
        })}}, [id])
            
    return(
        <>
            <p>{informacion}</p>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer
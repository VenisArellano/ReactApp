import {useEffect, useState} from "react";
import {stock} from "./stockProductos";
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";

/* Contenido de la Pagina */

const ItemListContainer = ({informacion}) => {

    const [productos,setProductos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      
      const promise = new Promise((res)=>{
        setProductos([]);
        setTimeout(() => {
          if(id){
            res(stock.filter(p => p.tipo === id))
          }
          else {
            res(stock)
          }
        }
          , 2000)
      })
      promise.then((producto) => {
        setProductos(producto)
      })
    }, [id])

    return(
        <>
            <p>{informacion}</p>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer
import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {firestore} from "./Firebase";

/* Contenido de la Pagina */

const ItemDetailContainer = () => {

    const [items,setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const collection = firestore.collection("productos")

        if(id) {
            const filtrado = collection.doc(id)
            const query = filtrado.get()

            query.then((resultado) => {
                const id = resultado.id
                const data = resultado.data()
                setItems({id, ...data})
            })
        }}, [id])
    
    return(
        <>
            <ItemDetail items={items}/>
        </>
    )
}

export default ItemDetailContainer
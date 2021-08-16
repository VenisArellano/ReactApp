import {useEffect, useState} from "react";
import {stock} from "./stockProductos";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

/* Contenido de la Pagina */

const ItemDetailContainer = () => {

    const [items,setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const getItems = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(stock.find(items=>items.id == id))
            }, 2000)
        })

        getItems.then((detalle) => {
            setItems(detalle)
        })
    }, [id])
   
    return(
        <>
            <ItemDetail items={items}/>
        </>
    )
}

export default ItemDetailContainer
import {useEffect, useState} from "react";
import {stock} from "./stockProductos";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

/* Contenido de la Pagina */

const ItemDetailContainer = () => {

    const [items,setItems] = useState([]);
    const params = useParams();

    useEffect(() => {
        const getItems = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(stock.find(producto=>producto.id == params.id))
            }, 2000)
        })

        getItems.then((detalle) => {
            console.log("Actualizo el detalle");
            setItems(detalle)
        })
    }, [params.id])
   
    return(
        <>
            <ItemDetail items={items}/>
        </>
    )
}

export default ItemDetailContainer
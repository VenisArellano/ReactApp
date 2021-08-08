import {useEffect, useState} from "react";
import {stock} from "./stockProductos";
import ItemDetail from "./ItemDetail";



{/* Contenido de la Pagina */}

const ItemDetailContainer = ({informacion}) => {

    const [productos,setProductos] = useState([]);
    const producto1 = stock[0];

    useEffect(() => {
        const getItems = new Promise ((res) => {
            setTimeout(() => {
                res(producto1)
            }, 2000)
        })

        getItems.then((detalle) => {
            console.log("Actualizo el detalle");
            setProductos(detalle)
        })
    }, [])
   
    return(
        <>
            <p>{informacion}</p>
            {/*<ItemList productos={productos}/>*/}

            <ItemDetail productos={productos}/>

        </>
    )
}

export default ItemDetailContainer
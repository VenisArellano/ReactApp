import {useEffect, useState} from "react";
import {stock} from "./stockProductos";
import ItemList from "./ItemList"

{/* Contenido de la Pagina */}

const ItemListContainer = ({informacion}) => {

    // integrando productos //
    const [productos,setProductos] = useState([])
  
    useEffect(()=>{
      
      const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(productos)
        },2000)
      })
  
      promise.then((productos)=>setProductos(stock))
    
    },[])

    return(
        <>
            <p>{informacion}</p>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer
import {useEffect, useState} from "react";
import {stock} from "./stockProductos";
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";

/* Contenido de la Pagina */

const ItemListContainer = ({informacion}) => {

    const [productos,setProductos] = useState([]);
    const params = useParams();

    useEffect(() => {
      
      const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
          if(params.id){
            resolve(stock.filter(producto=>producto.id == params.id))
          }
          else {
            resolve(stock)
          }
        },2000)
      })
  
      promise.then((productos)=>setProductos(stock))
    
    },[params.id])

    return(
        <>
            <p>{informacion}</p>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer
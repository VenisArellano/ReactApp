import useCart from "./useCart"
import Button from "react-bootstrap/Button";
import {useContext} from "react";

const Boton = ({id, text}) => {

    const {removeItem, clear} = useContext(useCart);
    
    const accionBoton = ()=> {
        if(text === 'Eliminar'){
            removeItem(id)
        } 
        else if (text === 'Vaciar Carrito'){
            clear()
        }
    }
    return (

       <Button onClick={accionBoton}>{text}</Button>
    )
}

export default Boton;
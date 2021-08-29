import UseCart from "./UseCart"
import Button from "react-bootstrap/Button";
import {useContext} from "react";

const Boton = ({id, text}) => {

    const {removeItem, clear} = useContext(UseCart);
    
    const accionBoton = () => {
        if(text === 'Eliminar'){
            removeItem(id)
        } 
        else if (text === 'Vaciar Carrito'){
            clear()
        }
    }
    return (

       <Button className="text" variant="danger" onClick={accionBoton}>{text}</Button>
    )
}

export default Boton;
import useCart from "./useCart"
import Button from "react-bootstrap/Button";

const Boton = ({id, text}) => {

    const {removeItem, clear} = useCart();
    
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
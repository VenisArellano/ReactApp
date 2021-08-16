import Navbar from "react-bootstrap/Navbar";
import {FaOpencart} from "react-icons/fa";

/* Boton del Carrito */

const CartWidget = () => {

    return(
        <>
            <Navbar.Brand type="button"> 
                <FaOpencart className="carrito"/>
            </Navbar.Brand>
        </>
    )
}

export default CartWidget

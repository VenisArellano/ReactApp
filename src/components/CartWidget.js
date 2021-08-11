import Navbar from "react-bootstrap/Navbar";
import {FaOpencart} from "react-icons/fa";

/* Boton del Carrito */

const CartWidget = () => {

    return(
        <>
            <Navbar.Brand type="button"> 
                <FaOpencart/>
            </Navbar.Brand>
        </>
    )
}

export default CartWidget

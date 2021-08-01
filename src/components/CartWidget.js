import Navbar from "react-bootstrap/Navbar";
import {FaOpencart} from "react-icons/fa";

{/* Boton del Carrito */}

const CartWidget = () => {

    return(
        <container>
            <Navbar.Brand type="button"> 
                <FaOpencart/>
            </Navbar.Brand>
        </container>
    )
}

export default CartWidget

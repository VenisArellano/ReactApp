import {FaOpencart} from "react-icons/fa";
import {Link} from "react-router-dom";


const CartWidget = () => {


    return(
        <>
            <Link to="/cart" type="button"> 
                <FaOpencart className="carrito"/>
            </Link>
        </>
    )
}

export default CartWidget;

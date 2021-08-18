import {useContext, useEffect, useState} from "react";
import {FaOpencart} from "react-icons/fa";
import CartContext from "./CartContext";
import {Link} from "react-router-dom";


const CartWidget = () => {

    const {carrito} = useContext(CartContext);
    const [numIcono, SetNumIcono] = useState();

    useEffect (() => {
        SetNumIcono(carrito.length);
        }, [carrito.length]
    );

    return(
        <>
            <Link to={`/cart`} type="button"> 
                <FaOpencart className="carrito"/>
            </Link>
            <div style={{opacity: carrito.length > 0 ? 1 : 0}} className="">{numIcono}</div>
        </>
    )
}

export default CartWidget;

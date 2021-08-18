import CartContext from "./CartContext";
import {useContext} from "react";
import {Link} from "react-router-dom";
import ItemCart from "./ItemCart";
import {FaTrash} from "react-icons/fa";



const Cart = () => {

    const {carrito, borrarDelCarrito, vaciarCarrito, precioTotal} = useContext(CartContext);

    
    return (
        <>
            <h2>Carrito de compras</h2>
            {carrito.length > 0 ? <div className=""><img onClick={vaciarCarrito} src={FaTrash} alt="" /><p>vaciar el carrito</p></div> : null } 
            <section>
            {carrito.length > 0 ? carrito.map( (item) => <ItemCart key={item.id} item={item} borrarDelCarrito={borrarDelCarrito} />) : <article><div className="">No hay productos en tu carrito. Te invitamos a que visites nuestra <Link to={`/`}><span className="">Tienda</span></Link></div></article>}
            </section>
            {carrito.length > 0 ?
            <div className=""><div className=""><p>Total: $<span> {precioTotal}</span></p><button id="botonCheckout" className="" href="">Check out</button></div></div>
            : null
            }
        </>
    )
};

export default Cart;
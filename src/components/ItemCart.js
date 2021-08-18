import {Link} from "react-router-dom";
import {FaTrash} from "react-icons/fa";

const ItemCart = ({item, borrarDelCarrito}) => {

    let subtotal = item.cantidad * item.precio;

    return (
        <>
        <article className="">
            <div id={item.id} className="">
                <div className="">
                    <Link to={`/item/${item.id}`}>
                        <img src={item.img} alt={item.nombre} title={item.nombre} />
                    </Link>
                </div>
                <div className="">
                    <h4>{item.titulo}</h4>
                    <p title={item.descripcion}></p>
                </div>
            </div>
            <div className="">
                <div className="">
                    <p title="Precio por unidad">${item.precio}</p>
                </div>
                <div className="">
                    <p>cantidad: {item.cantidad}</p>
                </div>
                <div className="">
                    <p>Subtotal: $<span>{subtotal}</span></p>
                </div>
                <div className="">
                    <img onClick={()=> borrarDelCarrito(item.nombre, item.id)} src={FaTrash} alt="eliminar" title="eliminar el producto del carrito" />
                </div>
            </div>
        </article>
        <div className="">
            <p>* Stock disponible de {item.nombre}: {item.stock} unidad/es. Para cambiar la cantidad hacer click en la imagen</p>
        </div>
    </>
    );
}

export default ItemCart;
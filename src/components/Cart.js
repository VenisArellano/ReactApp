import Boton from "./Boton";
import useCart from "./useCart";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useContext} from "react";


const Cart = () => {

    const {cart} = useContext(useCart);

    return(
        <>
            {(cart.length > 0) ?
                <article className="">
                    <Boton text={'Vaciar Carrito'}/>
                        <div>
                            <boddy>
                                {cart.map(i => (
                                    <div key={i.item.id}>
                                        <p>{i.item.nombre}</p>
                                        <img src={i.item.img1} alt={i.item.nombre}/>
                                        <p>{i.item.precio}</p>
                                        <p>{i.quantity}</p>
                                        <div>
                                            <Boton id={i.item.id} text={'Eliminar'} />
                                        </div>
                                    </div>
                                ))}
                            </boddy>
                        </div>
                </article>
                :
                <container> 
                    <h1> Carrito Vacío </h1>
                    <Link to='/'>
                        <Button variant="contained" color='primary' style={{backgroundColor: '#34A512'}}>Volver al inicio</Button>
                    </Link> 
                </container>
            }
        </>
    )
}

export default Cart;
import Boton from "./Boton";
import useCart from "./useCart";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useContext} from "react";
import Card from "react-bootstrap/Card";


const Cart = () => {

    const {cart} = useContext(useCart);

    let precioTotal = cart.reduce((sum, value) => (typeof value.item.precio == "number" ? sum + value.item.precio : sum),0) 
        console.log(precioTotal);

    return(
        <>
            {(cart.length > 0) ?
                <div>
                    <Boton text={'Vaciar Carrito'}/>
                        {cart.map(i => (
                            <div key={i.item.id}>
                                <Card>
                                    <Card.Header><strong>{i.item.nombre}</strong></Card.Header>
                                    <Card.Body className="itemsCart">
                                        <img className="imgCart" src={i.item.img} alt={i.item.nombre}/>
                                        <Card.Text className="textCart">Cantidad: {i.quantity}</Card.Text>
                                        <Card.Text className="textCart">Precio: <strong>${i.item.precio}</strong></Card.Text>
                                    </Card.Body>
                                    <div>
                                        <Boton variant="danger" id={i.item.id} text={'Eliminar'} />
                                    </div>
                                </Card>
                            </div>
                        ))}
                        <div>
                            <div>
                                <Card.Header className="text">Precio Total: <strong>${precioTotal}</strong></Card.Header>
                            </div>
                            <div className="text">
                                <Link to='/'>
                                    <Button variant="dark">Seguir Comprando</Button>
                                </Link>
                            </div>
                        </div>
                </div>
                :
                <container> 
                    <h1> Carrito Vacío </h1>
                    <Link to='/'>
                        <Button variant="dark">Volver al inicio</Button>
                    </Link> 
                </container>
            }
        </>
    )
}

export default Cart;
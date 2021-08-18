import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import CartContext from "./CartContext";


const ItemDetail = ({items}) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext);
    const [terminarCompra, setTerminarCompra] = useState("");

    let initial;
    if (carrito.find((producto) => producto.id === items.id)) {
        initial = parseInt(carrito.filter((producto) => producto.id === items.id).map((producto) => producto.cantidad));
    } else {
        initial = 1;
    }

    const onAdd = () => {
        setTerminarCompra(<Link to={`/cart`} className="">Terminar la compra</Link>);
    }

        return (
                <div className="container">
                    <div className="row">
                        {(items.id) &&
                        <Card style={{ width: '15rem'}}>
                            <img src={items.img1} alt={items.nombre}/>
                            <Card.Body>
                                <Card.Title>{items.nombre}</Card.Title>
                                <Card.Text>{items.descripcion}</Card.Text>
                                <p> Precio: <strong>$ {items.precio}</strong></p>
                                <ItemCount producto={items} stock={items.stock} initial={initial} agregarAlCarrito={agregarAlCarrito} onAdd={onAdd}/>
                                <Button variant="success">{terminarCompra}</Button>
                            </Card.Body>
                        </Card>
                        }
                    </div>
                </div>
        );
}

export default ItemDetail;
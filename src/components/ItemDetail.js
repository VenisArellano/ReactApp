import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import UseCart from "./UseCart";


const ItemDetail = ({items}) => {

    const {addItem} = useContext(UseCart);

    const [unidades, setUnidades] = useState();

    const onAdd = (cantidad) => {
        setUnidades(cantidad);
    }

    const agregarItems = () => {
        const cartItem = { item: items,
            quantity: unidades
        }
        addItem(cartItem);
    }

    if(unidades > 0) {
        return (
                <div className="container">
                    <div className="row">
                        {(items.id) &&
                        <Card className="cardDetail">
                            <img className="imgDetail" src={items.img1} alt={items.nombre}/>
                            <Card.Body>
                                <Card.Title>{items.nombre}</Card.Title>
                                <Card.Text>{items.descripcion}</Card.Text>
                                <p> Precio: <strong>$ {items.precio * unidades}</strong></p>
                                <ItemCount id={items.id} stock={items.stock} initial={items.stock > 0 ? 1 : 0} onAdd={onAdd}/>
                                <Link to="/cart"><Button className="botonCompra" variant="success" onClick={agregarItems}>Terminar Compra</Button></Link>
                            </Card.Body>
                        </Card>
                        }
                    </div>
                </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    {(items.id) &&
                    <Card className="cardDetail">
                        <img className="imgDetail" src={items.img1} alt={items.nombre}/>
                        <Card.Body>
                            <Card.Title>{items.nombre}</Card.Title>
                            <Card.Text>{items.descripcion}</Card.Text>
                            <p> Precio: <strong>$ {items.precio}</strong></p>
                            <ItemCount id={items.id} stock={items.stock} initial={items.stock > 0 ? 1 : 0} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                    }
                </div>
            </div>
        )
    }
}

export default ItemDetail;
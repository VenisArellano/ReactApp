import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";
import {useState} from "react";
import {Link} from "react-router-dom";



const ItemDetail = ({items}) => {

    const [unidades, setUnidades] = useState()

    const onAdd = (cantidad) => {
        console.log(cantidad)
        setUnidades(cantidad)
        console.log(unidades)
    }

    if(unidades > 0) {
        return ( 
                <div className="container">
                    <div className="row">
                        {(items.id) &&
                        <Card style={{ width: '15rem'}}>
                            <img src={items.img1} alt={items.nombre}/>
                            <Card.Body>
                                <Card.Title>{items.nombre}</Card.Title>
                                <Card.Text>{items.descripcion}</Card.Text>
                                <p> Precio: <strong>$ {items.precio * unidades}</strong></p>
                                <ItemCount id={items.id} stock={items.stock} initial={0} onAdd={onAdd}/>
                                <Link to="/cart"><Button variant="success">Terminar Compra</Button></Link>
                            </Card.Body>
                        </Card>
                        }
                    </div>
                </div>
        )
    }
    else {
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
                            <ItemCount id={items.id} stock={items.stock} initial={0} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                    }
                </div>
            </div>
    )
}

};

export default ItemDetail;
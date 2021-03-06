import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";


const Item = ({producto}) => {

    return (
            <Card className="cardItem">
                <img className="imgCard" src={producto.img} alt={producto.nombre} />
                <Card.Body>
                    <Link to={`/item/${producto.id}`} className="text-decoration-none">
                        <Card.Title>{producto.nombre}</Card.Title>
                    </Link>
                    <p> Precio: <strong>${producto.precio}</strong></p>
                </Card.Body>
            </Card>
    )
};

export default Item;
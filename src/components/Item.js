import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";



const Item = ({producto}) => {

    return ( 

                <div className="container">
                    <div className="row">
                        <Card style={{ width: '15rem'}}>
                            <Card.Img src={producto.img} />
                            <Card.Body>
                                <Link to={`/item/${producto.id}`}>
                                    <Card.Title>{producto.nombre}</Card.Title>
                                </Link>
                                <p> Precio: <strong>{producto.precio}</strong></p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
    )
};

export default Item;
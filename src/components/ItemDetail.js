import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";


const ItemDetail = ({items}) => {

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return ( 

            <div className="container">
                <div className="row">
                    <Card style={{ width: '15rem'}}>
                        <Card.Img src={items.img} alt={items.nombre}/>
                        <Card.Body>
                            <Card.Title>{items.nombre}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <p> Precio: <strong>{items.precio}</strong></p>
                            <ItemCount stock={20} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </div>
            </div>
       
    )
};

export default ItemDetail;
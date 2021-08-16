import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";



const ItemDetail = ({items}) => {

    const onAdd = (cantidad) => {
        console.log(cantidad)
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
                            <ItemCount id={items.id} stock={items.stock} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                    }
                </div>
            </div>
       
    )
};

export default ItemDetail;
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const Item = ({producto}) => {

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return ( 

        <>
            <Container>
                <Row>
                    <Card style={{ width: '15rem'}}>
                        <Card.Img src={producto.img} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <p> Precio: <strong>{producto.precio}</strong></p>
                            <ItemCount stock={20} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
};

export default Item;
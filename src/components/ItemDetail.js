import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const ItemDetail = ({productos}) => {

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return ( 

        <>
            <Container>
                <Row>
                    <Card style={{ width: '15rem'}}>
                        <Card.Img src={productos.img} />
                        <Card.Body>
                            <Card.Title>{productos.nombre}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <p> Precio: <strong>{productos.precio}</strong></p>
                            <ItemCount stock={20} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
};

export default ItemDetail;
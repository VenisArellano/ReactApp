import {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import {Link} from "react-router-dom";


const ItemCount = ({producto, stock, initial, agregarAlCarrito, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumaContador = () => {

        if(contador < stock){
            setContador(contador + 1);
        }
        else {
             alert("Supera el stock disponible");
        }
    }

    const restaContador = () => {

        if(contador > 1){
            setContador(contador - 1)
        }
        else {
            alert("No puede quedar en 0");
        }
    }

    const confirmar = () => {
        if(stock > 0){
            onAdd(contador)
        }
    }
    
    if(contador === initial & stock > 0){
        return (
            <div>
                <Card.Body>
                    <p><Button variant="secondary" onClick={restaContador}>-</Button> {contador} <Button variant="secondary" onClick={sumaContador}>+</Button></p>
                    <Button variant="danger" onClick={() => {agregarAlCarrito(producto, contador); onAdd()}}>Agregar al Carrito</Button>
                </Card.Body>
            </div>
        )
    }
    else if(contador === initial & stock === 0){
        return (
            <div>
                <Alert variant="danger">Producto Sin Stock</Alert>
                <Link to="/"><Button variant="dark">Ir Al Inicio</Button></Link>
            </div>
        )
    }
}

export default ItemCount;
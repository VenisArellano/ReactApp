import {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import {Link} from "react-router-dom";


const ItemCount = ({stock, initial, onAdd}) => {

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
            setContador(contador - 1);
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
    
        return (
            <>
            {(stock > 0)
                ?
                <>
                    <div>
                        <Card.Body>
                            <p><Button variant="secondary" onClick={restaContador}>-</Button> {contador} <Button variant="secondary" onClick={sumaContador}>+</Button></p>
                        </Card.Body>
                    </div>
                    <Button variant="danger" onClick={confirmar}>Agregar al Carrito</Button>
                </>
                :
                <div>
                    <Alert variant="danger">Producto Sin Stock</Alert>
                    <Link to="/"><Button variant="dark">Ir Al Inicio</Button></Link>
                </div>
            }
            </>
        )
}

export default ItemCount;
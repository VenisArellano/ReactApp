
import {useState} from "react";
import Card from "react-bootstrap/Card";
import llanta from "./img/llanta.jpg";

{/* Componente que suma y resta la cantidad del item */}

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumaContador = () => {

        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const restaContador = () => {

        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const confirmar = () => {
        if(stock > 0){
            onAdd(contador)
        }
    }
    
    return (

            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={llanta}/>
                    <Card.Body>
                        <Card.Title>Llanta Volkswagen</Card.Title>
                        <Card.Text>Llanta Audi Tt- R15- Vison/mate.</Card.Text>
                        <p><button onClick={restaContador}>-</button> Contador Actual : {contador} <button onClick={sumaContador}>+</button></p>
                        <button onClick={confirmar}>Agregar al Carrito</button>
                    </Card.Body>
                </Card>
            </>
    )

}

export default ItemCount;
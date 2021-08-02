import {useState} from "react";
import Card from "react-bootstrap/Card";


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
                    <Card.Body>
                        <p><button onClick={restaContador}>-</button> {contador} <button onClick={sumaContador}>+</button></p>
                        <button onClick={confirmar}>Agregar al Carrito</button>
                    </Card.Body>
            </>
    )

}

export default ItemCount;
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";

{/* Contenido de la Pagina */}

const ItemListContainer = ({informacion}) => {

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return(
        <>
            <p>{informacion}</p>
            <ItemCount stock={20} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer
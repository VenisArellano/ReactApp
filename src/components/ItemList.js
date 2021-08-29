import Item from "./Item"

const ItemList = ({productos}) => {
  
  return (
        <>
          <ul>
              <article className="itemsLista">
                {productos.map(producto=>{
                  return <Item key={producto.id} producto={producto}/>
                })}
              </article>
            </ul>
        </>
  )
}

export default ItemList;
import {useState} from "react";
import {Provider} from "./UseCart";



const CartProvider = ({children}) => {
 
        const [cart, setCart] = useState([]);
        
        const isInCart = (id) => {
            return cart.find(obj => obj.item.id === id)
        }
        
        const addItem = (item) => {
            if(isInCart(item.item.id)){
                let index = cart.findIndex((obj => obj.item.id == item.item.id));
                let cartItem = cart[index];
                cartItem.quantity = cartItem.quantity + item.quantity
                cart.splice(index, 1, cartItem);
                setCart([...cart]);
            } 
            else {
                setCart([...cart, item])
            }
}
    
        const removeItem = (itemID) => {
                let index = cart.findIndex((obj => obj.item.id == itemID));
                cart.splice(index, 1);
                setCart([...cart]);
        }
    
        const clear = () => {
            setCart([])
        }
    
        const ContextValue = {
            cart,
            addItem,
            removeItem,
            clear,
            isInCart
        }
    
        return (
            <Provider value={ContextValue}>
                {children}
            </Provider>
    
        )
    }
    
export default CartProvider; 
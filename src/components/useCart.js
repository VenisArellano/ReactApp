import {useContext} from "react";
import {CartContext} from "./CartProvider";

export default function useCart() {
    return useContext(CartContext)
}
import {createContext} from "react";


export const useCart = createContext();

export const {Consumer, Provider} = useCart;


export default useCart; 
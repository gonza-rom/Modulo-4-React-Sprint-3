import { createContext } from "react";
import useShoppingCart from "../hooks/UseShoppingCart";

export const CartContext = createContext()

export const CartProvider = ({children})=>
{
    return (
        <CartContext.Provider value={ useShoppingCart ()}>
            {children}
        </CartContext.Provider>
    )

}

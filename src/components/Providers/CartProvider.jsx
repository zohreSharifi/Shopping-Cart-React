import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";
// use context:
// 1. create context
// 2. export context
// 3. provider
// 4. useContext =>consume
const CartContext = createContext();
const CartContextDispatcher = createContext();

const CartProvider = ({ children }) => {
    const initialState = {
        cart: [],
        total: 0,
    };

    const [cart, dispatch] = useReducer(cartReducer, initialState);
   
    return (
        <CartContext.Provider value={cart}>
            <CartContextDispatcher.Provider value={dispatch}>
                {children}
            </CartContextDispatcher.Provider>
        </CartContext.Provider>
    );
};
export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);

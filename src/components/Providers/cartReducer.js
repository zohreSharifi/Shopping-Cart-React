const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const updatedCart = [...state.cart];
            const index = updatedCart.findIndex((item) => item.id === action.payload.id);
            if (index < 0) {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, qty: 1 }],
                    total: state.total + action.payload.offPrice,
                };
            }
            const updatedProduct = { ...updatedCart[index] };
            updatedProduct.qty++;
            updatedCart[index] = updatedProduct;
            return { ...state, cart: updatedCart, total: state.total + action.payload.offPrice };
        }
        case "REMOVE_PRODUCT": {
            const updatedCart = [...state.cart];
            const index = state.cart.findIndex((item) => item === action.payload);
            const updatedProduct = { ...updatedCart[index] };
            if (updatedProduct.qty === 1) {
                const updatedCart = state.cart.filter((item) => item != action.payload);
                return {
                    ...state,
                    cart: updatedCart,
                    total: state.total - action.payload.offPrice,
                };
            } else {
                updatedProduct.qty--;
                updatedCart[index] = updatedProduct;
                return {
                    ...state,
                    cart: updatedCart,
                    total: state.total - action.payload.offPrice,
                };
            }
        }
        default:
            return state;
    }
};

export default cartReducer;

// ......................Reducer:
// steps:
// useReducer(reducer,initialState)
// return: [count,dispatch]
// const reducer=(state,action)=>{}

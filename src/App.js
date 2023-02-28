import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage";
import Cart from "./Pages/CartPage";
import { createContext } from "react";
import CartProvider from "./components/Providers/CartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupPage from "./Pages/signupPage";
import LoginPage from "./Pages/loginPage";
import Checkout from "./Pages/checkoutPage";
import FilterList from "./useTransition/filterList";

export const CartCounterContext = createContext();
function App() {
    return (
        <CartProvider>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout-cart" element={<Checkout />} />
                    <Route path="/signup" element={<SignupPage/>} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>



        // .......................................... season 18  .......................
        // <FilterList/>
    );
}

export default App;

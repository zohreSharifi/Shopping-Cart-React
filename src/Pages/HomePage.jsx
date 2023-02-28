import Layout from "../Layout/Layout";
import { products } from "../data";
import { useCart, useCartActions } from "../components/Providers/CartProvider";
import {checkInCart} from "../utils/CheckInCart"
import { toast} from "react-toastify"
const HomePage = () => {
    const { cart } = useCart();
    const dispatch = useCartActions();
    const addProductHandler = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        });
           toast.success(`${product.name} "Added To Cart"`)
    };
   
   
    return (
        <Layout>
            <main className="container">
                <section className="productList">
                    {products.map((p) => (
                        <section className="product" key={p.id}>
                            <div>
                                <img src={p.image} alt={p.name} />
                            </div>
                            <div className="productDetail">
                                <p>{p.name}</p>
                                <p>$ {p.price}</p>
                                <button
                                    className="btn primary"
                                    id={p.id}
                                    onClick={() => addProductHandler(p)}
                                >
                                    {checkInCart(cart, p) ? "In Cart" : "Add to Cart"}
                                </button>
                            </div>
                        </section>
                    ))}
                </section>
            </main>
        </Layout>
    );
};

export default HomePage;

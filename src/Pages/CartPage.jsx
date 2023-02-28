import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../components/Providers/CartProvider";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, total } = useCart();
    const dispatch = useCartActions();

    const incHandler = (cartItem) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: cartItem,
        });
    };

    const decHandler = (cartItem) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: cartItem,
        });
    };

    if (!cart.length) {
        return (
            <Layout>
                <main className="container">
                    <h2>cart is empty</h2>
                </main>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className="container">
                <section className="cartCenter">
                    <section className="cartItemList">
                        {cart.map((p) => {
                            return (
                                <div className="cartItem">
                                    <div className="itemImg">
                                        <img src={p.image} alt={p.name} />
                                    </div>
                                    <div>{p.name}</div>
                                    <div>${p.offPrice * p.qty}</div>
                                    <div className="btnGroup">
                                        <button
                                            id={p.id}
                                            onClick={() => incHandler(p)}
                                            style={{ borderTopLeftRadius: " 5px" }}
                                        >
                                            +
                                        </button>
                                        <button id={p.id}>{p.qty}</button>
                                        <button id={p.id} onClick={() => decHandler(p)}>
                                            {p.qty > 1 ? "-" : "-"}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                    <CartSummery total={total} cart={cart} />
                </section>
            </main>
        </Layout>
    );
};

export default Cart;

const CartSummery = ({ total, cart }) => {
    const originalTotalPrice = cart.length
        ? cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
        : 0;
    return (
        <section className="cartSummery">
            <h2 style={{ marginBottom: "30px" }}>cart summery</h2>
            <div className="summeryItem">
                <p>original total price</p>
                <p>{originalTotalPrice} $</p>
            </div>
            <div className="summeryItem">
                <p>cart discount</p>
                <p>{originalTotalPrice - total} $</p>
            </div>
            <div className="summeryItem net">
                <p>net price</p>
                <p>{total} $</p>
            </div>
            <Link to="/checkout-cart">
                <button className="checkoutBtn">go to checkout</button>
            </Link>
        </section>
    );
};

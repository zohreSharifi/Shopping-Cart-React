import styles from "./Navigation.module.css";
import { useCart } from "../Providers/CartProvider";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const { cart } = useCart();

    return (
        <header className={styles.mainNav}>
            <nav>
                <section>
                    <h2>LOGO</h2>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive && `${styles.active}`}
                        >
                            Home
                        </NavLink>
                    </li>
                </section>
                <ul>
                    <li className={styles.cartSection}>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) => isActive && `${styles.active}`}
                        >
                            Cart
                        </NavLink>
                        <span className={styles.cartCounter}>{cart.length ? cart.length : 0}</span>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) => isActive && `${styles.active}`}
                        >
                            login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signup"
                            className={({ isActive }) => isActive && `${styles.active}`}
                        >
                            sign up
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;

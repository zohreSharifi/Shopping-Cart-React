import { Link } from "react-router-dom";
import Input from "../components/common/input";
import Layout from "../Layout/Layout";

const Checkout = () => {
    return ( 
       <Layout>
         <div>
            <h2>check out page</h2>
            <Link to="/">back Home</Link>
            <Input/>
        </div>
       </Layout>
    );
}
 
export default Checkout;
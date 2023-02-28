import Input from "../common/input";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { loginUser } from "../../services/loginService";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const initialValues = {
    email: "",
    password: "",
};
const validationSchema = yup.object({
    email: yup.string().email("Invalid email format !").required("email is required"),
    password: yup.string()
    .required("Please Enter your password")
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
    
});


const LoginForm = () => {
    let navigate = useNavigate();
   
       const [error,setError]=useState(null)
    const onSubmit =async (values) => {
           navigate('/')
    try {

        const {data}=await loginUser(values)
        setError(null)
     

    } catch (error) {
        
    }
    };
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (
        <div className="formContainer">
            <form onSubmit={formik.handleSubmit}>
                <Input name="email" formik={formik} label="email" type="email" />
                <Input name="password" formik={formik} label="password" type="password" />
                <button
                    type="submit"
                    style={{ width: "400px" }}
                    disabled={!formik.isValid}
                    className="btn primary"
                >
                    Login
                </button>
                <Link to="/signup">
                    <p style={{ marginTop: "15px" }}>Not sign up yet ?</p>
                </Link>
            </form>
        </div>
    );
};

export default LoginForm;

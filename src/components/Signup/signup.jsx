import Input from "../common/input";
import { useFormik } from "formik";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { signupUser } from "../../services/signupService";
import { useState } from "react";

const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
};

const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().email("Invalid email format !").required("email is required"),
    password: yup
        .string()
        .required("Please Enter your password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    passwordConfirm: yup
        .string()
        .required("password Confirm is required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    phoneNumber: yup
        .string()
        .required("please enter phone number")
        .matches(/^[0-9]{11}$/, "invalid phone number")
        .nullable(),
});



const SignupForm = () => {
    let navigate = useNavigate();
    const onSubmit=(values)=>{
        console.log(values)
        navigate('/')
    }
    
    // const [error, setError] = useState(null);
    // const onSubmit = async (values) => {
    //     const { name, email, password, phoneNumber } = values;
    //     console.log(values);
    //     const userData = { name, email, password, phoneNumber };
    //     try {
    //         const { data } = await signupUser(userData);
    //        setError(null)
    //     } catch (error) {
    //         console.log(error);
    //         if (error.response && error.response.data.massage) {
    //             setError(error.response.massage.data);
    //         }
    //     }
    // };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (
        <div className="formContainer">
            <form onSubmit={formik.handleSubmit}>
                <Input name="name" formik={formik} label="name" />
                <Input name="email" formik={formik} label="email" type="email" />
                <Input name="phoneNumber" formik={formik} label="phone number" type="tel" />
                <Input name="password" formik={formik} label="password" />
                <Input name="passwordConfirm" formik={formik} label="password confrimation" />
                <button
                    type="submit"
                    style={{ width: "400px" }}
                    disabled={!formik.isValid}
                    className="btn primary"
                >
                    Sign up
                </button>
                {/* {error && <p> {error} </p>} */}
                <Link to="/login">
                    <p style={{ marginTop: "15px" }}>Already Login ?</p>
                </Link>
            </form>
        </div>
    );
};

export default SignupForm;

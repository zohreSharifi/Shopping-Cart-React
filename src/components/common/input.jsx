import "./input.css"
const Input = ({label,name,formik,type="text"}) => {
 
    return (  
        <div className="formControl">
        <label htmlFor={name}>{label}</label>
        <input id={name} type={type}  name={name} {...formik.getFieldProps({name})}/>
        {formik.errors[name] && formik.touched[name] && 
            <p className="error">{formik.errors[name]}</p>
        }
    </div>

    );
}
 
export default Input;

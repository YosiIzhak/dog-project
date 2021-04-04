import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Form = () => {

    return (
       
            <form className='form'>
                <label className='formItem'>
                    First Name:
    <input type="text" name="firstName" />
                </label>
                <label className='formItem'>
                    Last Name:
    <input type="text" name="LastName" />
                </label>
                <Link to="/people"> <button type="button">submit</button></Link>
            </form>
     
    );
}
export default Form;
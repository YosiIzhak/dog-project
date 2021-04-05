import React, { useState } from "react";
import { Link } from 'react-router-dom';
const Login = () => {

    const handleSubmit = (e) => {
     
    };

    return (

        <form className='form' onSubmit={handleSubmit}>
            <label className='formItem'>
                First Name:
    <input type="text" name="firstName" />
            </label>
            <label className='formItem'>
                Last Name:
    <input type="text" name="LastName" />
            </label>
            <Link to="/People">
                    <button type="button">submit!</button>
                </Link>
        </form>
    );
}
export default Login;
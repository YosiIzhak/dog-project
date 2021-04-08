import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css'
const Login = () => {

    const handleSubmit = (e) => {

    }; 

    return (
        <div className='myform' title="myform">
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
                    <button className="submitbtn" type="button">submit!</button>
                </Link>
            </form>
        </div>
    );
}
export default Login;
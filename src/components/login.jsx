import React, { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
const Login = () => {
    const [min, setMin] = useState(18);
    const [max, setMax] = useState(70);
    const changeMin = (item) => {
        setMin(item);
    };
    const changeMax = (item) => {
        setMax(item);
    };
    const handleSubmit = (e) => {
        console.log(`  min: ${min}   max: ${max} `);
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
            <label>min:</label>
            <input value={min} onChange={(e) => changeMin(e.target.value)} type="number" id="min" min="18" max="70" />
            <label>max:</label>
            <input value={max} onChange={(e) => changeMax(e.target.value)} type="number" id="max" min="18" max="70" />
            <Link to={`/People/${max}`}> <button type="submit" >submit</button></Link>
        </form>
    );
}
export default Login;
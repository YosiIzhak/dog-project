import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home' >

            <Link to="/form">
                <button className="loginBtn" type="button">login</button>
            </Link>

        </div>
    )
}

export default Home
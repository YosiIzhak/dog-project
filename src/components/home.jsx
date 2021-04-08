import React, { useState} from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import HomeModal from './homeModal'
const Home = () => {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow((isShown) => !isShown);
    };
    return (
        <div className='home' title="home">
            <button className="homebtn" onClick={e => {showModal()}}>About </button>
         
            <Link to="/form">
                <button className="loginBtn" type="button">login</button>
            </Link>
            {show ? <HomeModal  onClose={showModal} /> : null}
        </div>
    )
}

export default Home
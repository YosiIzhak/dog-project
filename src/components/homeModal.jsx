import React, { useState,useRef} from 'react';
import './style.css'
import { useClickAway } from "./useClickAway";
const HomeModal = ({ onClose}) => {
    const modalRef = useRef(null);
    useClickAway(modalRef, () => {
        onClose();
    });

    return (
        <div className='homeModal' >
Welcome to my matchmaking site!
This site was build with ReactJS.
I prefered to use Hooks in this site.
the navigation in this site is performed by 
React Router.<br/>

        <button onClick={onClose}>Cancel</button>
        </div>
    )
  
           
}

export default HomeModal
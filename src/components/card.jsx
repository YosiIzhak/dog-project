import React from 'react'
import './style.css'

 const Card=(props) => {
    return (
        <div className='card' onClick={props.onClick} >
            
            <h1>{props.firstname} {props.lastname}</h1>
            <img src={props.picture} alt=""/>
           
        </div>
    )
}

export default Card
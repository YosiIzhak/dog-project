import React from 'react'
import './style.css'

export default function card(props) {
    return (
        <div className='card'>
            
            <h1>{props.firstname} {props.lastname}</h1>
            <img src={props.picture} alt=""/>

        </div>
    )
}
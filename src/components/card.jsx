import React from 'react'
import './style.css'

 const Card=(props) => {
    return (
        <div className='card' onClick={props.onClick}
            style={props.gender==='female'?{borderColor:'red', backgroundColor:'rgb(238, 130, 238)'}:
            {borderColor:'blue',backgroundColor:'rgb(106, 90, 205)'}}>
           
            <h3>{props.firstname} {props.lastname}</h3>
            <img src={props.picture} alt=""/>
           <h3>{props.age}</h3>
        </div>
    )
}

export default Card
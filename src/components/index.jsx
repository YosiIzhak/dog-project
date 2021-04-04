import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card'
import './style.css'
const People = () => {
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState('MALE');
    const [cardId, setCardId] = useState(null);
    const handleGender = (e) => {
        setGender(e.target.value);
        console.log(gender)
    }
   
    useEffect(() => {
        const req = async () => {
            const response = await axios.get(`https://randomuser.me/api/?results=15&gender=${gender.toLowerCase()}`)

            setUsers(response.data.results)

        }
        req();
    }, [gender]);
    const displayCard =(id) => {
        console.log(id);
    }

    const res = users.map((x,index) => {
        return <Card key={index} firstname={x.name.first} lastname={x.name.last}
         picture={x.picture.large} id={x.name.first} onClick={() => displayCard(x.name.first) }></Card>
    })
    return (
        <div>
            <select id="gender" onChange={handleGender}>
                <option value='male'>male</option>
                <option value='female'>female</option>
            </select>
           <div className="cards">
            {users.length > 0 ? res : ''} 
            </div>
        </div>
    )
}

export default People;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card'
const People = () => {
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState('MALE');
    const handleGender = (e) => {
        setGender(e.target.value);
        console.log(gender)
    }
   
    useEffect(() => {
        const req = async () => {
            const response = await axios.get(`https://randomuser.me/api/?results=10&gender=${gender.toLowerCase()}`)

            setUsers(response.data.results)

        }
        req();
    }, [gender]);
    // console.log(users)
    const res = users.map((x) => {
        return <Card key={x.name.first} firstname={x.name.first} lastname={x.name.last} picture={x.picture.large}></Card>
    })
    return (
        <div>
            <select id="gender" onChange={handleGender}>
                <option value='male'>male</option>
                <option value='female'>female</option>
            </select>
            {users.length > 0 ? res : ''} 
        </div>
    )
}

export default People;
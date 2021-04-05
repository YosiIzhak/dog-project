import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card'
import Modal from './modal'
import './style.css'

const People = () => {
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState('male');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalShown, setShown] = useState(false);
    const toggleModal = (id) => {
        setShown((isShown) => !isShown);
        console.log(id);
    };
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
   
    const handleSelecetUser = (index) => {
        toggleModal(index);
        setSelectedUser(users[index])
    }
    const res = users.map((x, index) => {
        return <Card key={index} firstname={x.name.first} lastname={x.name.last}
            picture={x.picture.large} id={x.name.first}
            gender={gender} age={x.dob.age}
            style={{ backgroundColor: (gender === 'male' ? 'rgb(106, 90, 205)' : 'rgb(238, 130, 238)') }}
            onClick={() => handleSelecetUser(index)} ></Card>
    })
    return (
        <div>
            <select id="gender" onChange={handleGender}>
                <option value='male'>male</option>
                <option value='female'>female</option>
            </select>
           
            <div className="cards" style={{ backgroundColor: (gender === 'male' ? 'rgb(30, 30, 205)' : 'rgb(205, 30, 30)') }}>
                {users.length > 0 ? res : ''}
                {isModalShown && selectedUser ? <Modal selectedUser={selectedUser} onClose={toggleModal} /> : null}
            </div>
        </div>
    )
}

export default People;
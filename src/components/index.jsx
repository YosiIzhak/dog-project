import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card'
import Modal from './modal'
import './style.css'

const People = () => {
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState('male');
    const [currentGender, setCurrentGender] = useState('male');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalShown, setShown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [min, setMin] = useState(18);
    const [max, setMax] = useState(70);
    let res = [];
  
    const changeMin = (item) => {
        setMin(item);
    };
    const changeMax = (item) => {
        setMax(item);
    };
    const toggleModal = (id) => {
        setShown((isShown) => !isShown);
        console.log(id);
    };
    const handleGender = (e) => {
        setGender(e.target.value);
       // console.log(gender)
    }

    useEffect(() => {
        const req = async () => {
            const response = await axios.get(`https://randomuser.me/api/?results=15&gender=${gender.toLowerCase()}`)

            setUsers(response.data.results)
        }
        req();
    }, [min, max, gender]);

    const handleSelecetUser = (index) => {
        toggleModal(index);
        setSelectedUser(filteredUsers[index])
    }
    
    const showFilteredRes = (e) => {
        e.preventDefault();
        setCurrentGender(gender);
        res = users.filter((user) => (user.dob.age >= min) && (user.dob.age <= max) && (user.gender == gender))
       setFilteredUsers([...res])
      
        return res;
      
    };

    return (
        <div>
            <form onSubmit={showFilteredRes}>
                <select id="gender" onChange={handleGender}>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                </select>
                <label>min:</label>
                <input value={min} onChange={(e) => changeMin(e.target.value)} type="number" id="min" min="18" max="70" />
                <label>max:</label>
                <input value={max} onChange={(e) => changeMax(e.target.value)} type="number" id="max" min="18" max="70" />
                <button type="submit" >ok!</button>
            </form>
            <div className="cards" style={{ backgroundColor: (currentGender === 'male' ? 'rgb(30, 30, 205)' : 'rgb(205, 30, 30)') }}>
               
                {filteredUsers.map((x, index) => {
                
                return(
                   
                    <Card key={index} firstname={x.name.first} lastname={x.name.last}
                        picture={x.picture.large} id={x.name.first}
                        gender={currentGender} age={x.dob.age}
                        onClick={() => handleSelecetUser(index)} ></Card>

               ) } )
                }
                 {users.length > 0 ? res : ''} 
                {isModalShown && selectedUser ? <Modal selectedUser={selectedUser} onClose={toggleModal} /> : null}
            </div>
        </div>
    )
}

export default People;
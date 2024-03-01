import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function UserDetails(){

    const params = useParams();
    const id= params.id;
    const [user, setUser] = useState({})

    const getUserDetails = async()=>{
        try {
            const resp = await axios.get("https://jsonplaceholder.typicode.com/users"+id)
            console.log(resp.data)
            setUser(resp.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUserDetails();
    },[])
    return(
        <div>
            <h1>User Details</h1>
            <ul className='list-group'>
                <li className='list-group-item'>ID: {user.id}</li>
                <li className='list-group-item'>Name: {user.name}</li>
                <li className='list-group-item'>UserName: {user.username}</li>
                <li className='list-group-item'>Email:  {user.email}</li>
                <li className='list-group-item'>Address: {user.address ? user.address.city : 'N/A'}</li>
            </ul>
        </div>
    )
}

export default UserDetails;
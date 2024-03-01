import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserList(){

    const navigate = useNavigate();
    const[user, setuser] = useState([]);
    const getUser=async ()=>{
        try {
            const resp = await axios.get("https://jsonplaceholder.typicode.com/users")
        setuser(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    const viewuser=(id)=>{
        navigate('/userdetails/'+id);
    }
    useEffect(()=>{
        getUser()
},[])
    return(
        <div>
            <h1>User List</h1>
            <table>
                <thead className=" table table-bordered table-striped">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                <td>
                                    <button onClick={()=>{viewuser(item.id)}}>View</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default UserList;
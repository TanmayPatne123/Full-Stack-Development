import React from 'react'
import NewUsers from './NewUsers'
import Users from './Users'
import { useState } from 'react';
import axios from 'axios';



function UserHome() {

    let[users,setUsers] = useState([]);

     const getUsers=()=>{
            axios
            .get("http://localhost:3000/result")
            .then((res)=>{
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((error)=>{
                alert("something went wrong while accessing users");
                console.log(error);
            });
        }

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <NewUsers getUsers={getUsers}/>
                 <Users getUsers={getUsers} users={users}/>   
            </div>
    </div>
  )
}

export default UserHome

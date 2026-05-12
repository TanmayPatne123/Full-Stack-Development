import React from 'react'
// import { useState } from 'react'
import axios from 'axios';

// import City from '../../redux/compoents/City'

// npx json-server --watch db.json

function NewUsers({getUsers,isNewUser,newuser,setNewUser,setIsNewUser}) 
{

  const updateUser=()=>{

    axios.put(`http://localhost:3000/result/${newuser.id}`,newuser)
    .then((res)=>{
      alert("user updated");
      getUsers();
      setNewUser({
          name:"",
          city:""
        });
        setIsNewUser(true);
    })
    .catch((error)=>
      {
      alert("Went something wroug while updating User");
      console.log(error);
    })
  }


  const addNewUser=()=>
    {
    axios
    .post("http://localhost:3000/result",newuser)
    .then((result) => 
      {
        alert("successfully new user created");
        getUsers();
        setNewUser({
          name:"",
          city:""
        })
    })
    .catch((err) => {
      alert("NewUsers is not created")
      console.log(err);
    });
  }

  return (
    <div style={{padding:"10px"}}>
      <h2>{isNewUser ? "New User":"Update User"}</h2>
      <input value={newuser.name}
      onChange={(event)=>
        {
          setNewUser({...newuser,name:event.target.value});
    }}
      type='text' 
      placeholder='username'>
      </input>
      <br />
      <br/>
      <select value={newuser.city}
       onChange={(event)=>
      {
        setNewUser({...newuser,city:event.target.value});
    }}>
        <option>Select City</option>
        <option value="c1">c1</option>
        <option value="c2">c2</option>
        <option value="c3">c3</option>
        <option value="c4">c4</option>
        <option value="c5">c5</option>
      </select> <br /> <br />
      <button onClick={isNewUser ? addNewUser : updateUser}>
        {isNewUser ? "New User":"Update User"}</button>
    </div>
  )
}

export default NewUsers

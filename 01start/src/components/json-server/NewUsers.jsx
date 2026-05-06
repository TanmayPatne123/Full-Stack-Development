import React from 'react'
import { useState } from 'react'
// import City from '../../redux/compoents/City'

function NewUsers() {

  let [newuser,setNewUser] = useState({
    name:"",
    city:""
  });

  const getNewUser=()=>{
    console.log(newuser);
  }

  return (
    <div style={{padding:"10px"}}>
      <h2>New User</h2>
      <input 
      onChange={(event)=>{setNewUser({...newuser,name:event.target.value});
    }}
      type='text' 
      placeholder='username'>
      </input>
      <br />
      <br/>
      <select onChange={(event)=>{setNewUser({...newuser,city:event.target.value});
    }}>
        <option>Select City</option>
        <option value="c1">c1</option>
        <option value="c2">c2</option>
        <option value="c3">c3</option>
        <option value="c4">c4</option>
        <option value="c5">c5</option>
      </select> <br /> <br />
      <button onClick={getNewUser}>New User</button>
    </div>
  )
}

export default NewUsers

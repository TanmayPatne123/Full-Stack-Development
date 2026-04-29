import React from 'react'
import { cityActionCreator } from '../actions/CityAction';
import { useState } from 'react'
import { useDispatch } from 'react-redux'; 

function City() {

    
    let [city,setCity] = useState("");
    let dispatch = useDispatch();
    
    const getCity=()=>  
        {
       dispatch(cityActionCreator(city))
    }

  return (
    <div style={{padding:"50px"}}>
      <h2>City component</h2>
      <select onChange={(event)=>{setCity(event.target.value)}}>
        <option>Select the city</option>
        <option>Mumbai</option>
        <option>Pune</option>
        <option>chambal</option>
        <option>Ludhiyana</option>
      </select>
      <button onClick={getCity}>Submit</button>
    </div>
  )
}

export default City

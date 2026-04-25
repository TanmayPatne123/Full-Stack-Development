import React, { useState } from 'react'
import Details from './Details'
import { myHomeContext } from './MyHomeContext';
import Navbar from '../nav/Navbar';


function HomeContextApi() {

    let [state,setState] = useState("")
    let [data,setData]= useState("");

    const submitData=()=>
        {
        setData(state);
    }

  return (
    <div>
      <h2>Home Component</h2>
      <input type="text" placeholder='Enter Text' onChange={(event)=>{
        setState(event.target.value)
      }}/>
      <br></br> 
      <button onClick={submitData}>Submit</button>
      <br />
      <hr/>
      <myHomeContext.Provider value={data}>
      <Details/>
      {/* <Navbar/> */}
      </myHomeContext.Provider>
    </div>
  );
}

export default HomeContextApi

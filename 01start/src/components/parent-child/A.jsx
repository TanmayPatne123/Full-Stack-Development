import React, { useState } from 'react'
import B from './B';



const aStyle= {
    width:"500px",
    boxShadow:"0 0 10px green",
    padding:"20px",
    margin:"100px auto",
    textAlign:"center"
};

function A() {
  let[state,setState]= useState("----");

  return (
    <div style={aStyle}>
      <h2>This is A Component</h2>
      <button onClick={()=>{setState("Tanmay")}}>Pass Data To B</button>
      <B bdata={state}/>
    </div>
  );
}

export default A

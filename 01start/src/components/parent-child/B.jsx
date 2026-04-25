import React from 'react'
import C from './C';

const bStyle= {
    width:"300px",
    boxShadow:"0 0 10px blue",
    padding:"20px",
    margin:"100px auto",
    textAlign:"center"
};


function B({bdata}) {

  return (
    <div style={bStyle}>
      <h2>This is B Component</h2>
      {/* <p>Data:{props.info}</p> */}
      <C cdata={bdata}/>
    </div>
  )
}

export default B

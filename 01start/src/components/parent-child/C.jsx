import React from 'react'

const cStyle= {
    width:"200px",
    boxShadow:"0 0 10px purple",
    padding:"20px",
    margin:"100px auto",
    textAlign:"center"
};


function C({cdata}) {
  return (
    <div style={cStyle}>
       <h3>This is C Component</h3>
       <p>Data:{cdata}</p>
    </div>
  );
}

export default C

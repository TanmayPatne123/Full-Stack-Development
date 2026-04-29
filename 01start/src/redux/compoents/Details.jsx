import React from 'react'
import { useSelector } from 'react-redux'; 

function Details() {

   let data =   useSelector((storedata)=>{
          return storedata
      })

  return (
    <div>
      <h2>Details Component</h2>
      <p style={{color:"green",fontWeight:"bold"}}>
       Name: {data.name}
      </p>
      <p style={{color:"green",fontWeight:"bold"}}>
      City:  {data.city}
      </p>
    </div>
  )
}

export default Details

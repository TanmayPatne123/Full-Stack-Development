import { useState } from "react";

function Username() {

    let [names,setNames] = useState(["Rohan","Kunal","sahil","Mohit"]);

  return (
    <div style={{padding:"50px"}}>
       <h2>User Names</h2>
       <ul>
        {
            names.map(function(name)
            {
                return <li>{name}</li>
            }
          )
        }
       </ul>
    </div>
  )
}

export default Username

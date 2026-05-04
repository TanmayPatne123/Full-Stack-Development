import React from 'react'

function NewUsers() {
  return (
    <div style={{padding:"10px"}}>
      <h2>New User</h2>
      <input type='text' placeholder='username'></input>
      <br />
      <br/>
      <select>
        <option>Select City</option>
        <option value="">c1</option>
        <option value="">c2</option>
        <option value="">c3</option>
        <option value="">c4</option>
        <option value="">c5</option>
      </select> <br /> <br />
      <button>New User</button>
    </div>
  )
}

export default NewUsers

import React from 'react'
import Name from './Name'
import City from './City'
import Details from './Details'

function ReduxHome() {
  return (
    <div>
      <div className='subContainer'>
        <Name/>
        <City/>
      </div>
      <hr></hr>
      <Details/>
    </div>
  )
}

export default ReduxHome

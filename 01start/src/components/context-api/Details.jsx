import React from 'react'
import { useContext } from 'react';
import { myHomeContext } from './MyHomeContext';

function Details() {

let store =  useContext(myHomeContext);
  return (
    <div>
      <h2>Details Component</h2>
      <p>Data:{store}</p>
    </div>
  );
}

export default Details

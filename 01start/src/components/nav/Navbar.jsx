import React from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { myHomeContext } from '../context-api/MyHomeContext';


function Navbar() {

  let store =  useContext(myHomeContext);
  return (
    <div class="header">
        <div class="leftPanel">
                    <h1>First Page in React</h1>
                    </div>
                <div class="rightPanel flexContainer">
                    <Link to="/">Home</Link>
                      <Link to="/products">Products</Link>
                       <Link to="/allproducts">AllProducts</Link>
                       <Link to="/counter">Counter</Link>
                       <Link to="/username">UserNames</Link>
                       <p>{store}</p>
                    </div>
                </div>
        );
}

export default Navbar

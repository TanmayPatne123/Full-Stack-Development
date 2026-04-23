import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <div className="container">
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/counter">Counter</Link>
            </div>
        </div>
    </div>
  );
}

export default Navbar

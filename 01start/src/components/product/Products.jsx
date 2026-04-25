import React from 'react'
import "./Products.css"
import {Link, Outlet} from "react-router-dom";


function product() {
  return (
    <div>
      <h2>Products Components</h2>
      <div className="productContainer">
      <div className="linksContainer">
        <Link to="electronics">Electronics</Link>
        <Link to="jewelery">Jewelery</Link>
        <Link to="mensc">Mens Clothes</Link>
        <Link to="womenc">Women clothes</Link>
      </div>
      <div className="componentsContainer">
        <Outlet/>
      </div>
      </div>
    </div>
  );
}

export default product

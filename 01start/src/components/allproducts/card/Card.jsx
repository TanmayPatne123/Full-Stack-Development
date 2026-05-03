import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom"


function Card({image,title,price,id}) {
  return (
    <div>
      <div className="card">
                <img src={image} width="100%" height={200}/>
                <h3>{id}</h3>
                <h3>{title}</h3>
                <p>{price}</p>
                <Link to={`/productdetails/${id}/${price}`}>                   
                <button>Product Details</button>
                </Link>
            </div>
    </div>
  );
}

export default Card

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

function ProductDetails() {

    let {id,x} = useParams();
    let productData =useSelector((storedata)=>{
        return storedata.products.filter((product)=>product.id==id);
    });

    useEffect(()=>{
      console.log(productData);
    })

  return (
    <div>
      <h2>Product Details:{x}</h2>
      <img src={productData[0].image} width={500} height={300}></img>
    </div>
  )
}

export default ProductDetails

import React from 'react'
import axios from "axios";
import "./AllProducts.css"
import Card from './card/Card';
import { useState,useEffect } from 'react';
import { productsAction } from '../../redux/actions/productsAction';
import {useDispatch,useSelector} from "react-redux";

function AllProducts()
 {

    let [allproducts,setAllProducts] = useState([]);

    let dispatch = useDispatch();

    let productsData = useSelector((storedata)=>{
        return storedata.products;
    });

    useEffect(()=>{
        if(productsData===0){
            getAllProducts();
        }
    },[])


    const getAllProducts= () =>
        {
        var promiseObject =axios.get("https://fakestoreapi.com/products");
        promiseObject
        .then((res)=>
            {
            var action = productsAction(res.data);
            dispatch(action);
        })
        .catch((error)=>
            {
            console.log("error");
            console.log(error);
        });
    }

  return (
    <div>
      <h2>All Products Components</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi saepe hic
         distinctio autem dolores qui dignissimos doloribus blanditiis, asperiores sequi earum nobis, 
         perferendis fugiat repellendus est debitis fuga ex nulla voluptatibus adipisci quos nihil!
          Dolorem nobis distinctio aliquid nulla. Impedit, placeat quidem est ipsam, rerum in fuga fugit 
          velit debitis nulla, sunt delectus. Hic eius dolor earum nobis praesentium alias fuga iste?
           Dolorem enim aut omnis quas? Nemo temporibus corporis eveniet quae ipsum dolorem enim nam, 
           sed maiores vel incidunt recusandae soluta et nobis perferendis facere cum? Neque quisquam
            laborum iure dignissimos? Quos debitis ex sunt rem, minima quisquam dicta velit unde repellat 
            obcaecati consectetur minus deleniti assumenda. Animi asperiores aliquid accusantium incidunt 
            cum a atque, non quasi ipsum aspernatur reprehenderit, nihil veniam itaque repellendus natus 
            quos doloribus impedit sequi molestiae fugit perferendis iusto ab, illum vitae.
         Soluta vitae debitis magnam nemo aperiam ut! Perferendis, dicta perspiciatis? Tenetur, a.</p>

         {/* <button onClick={getAllProducts}>Click Me</button> */}

          <div className="allProductsData">
                {
                    productsData.map(function(element)
                    {
                        return <Card 
                        image={element.image} 
                        title={element.title} 
                        price={element.price}
                        />;
                    })}
          </div>
    </div>
  );
}

export default AllProducts

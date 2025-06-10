import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import "./AllProducts.css";
import Card from "./Card/Card";
function AllProducts() {
  let[allproducts,setAllproducts]=useState([]);
    const getProducts=()=>{
        var promisobj= axios.get("https://fakestoreapi.com/products"); 
        promisobj.then((res)=>{
            console.log("then");
            console.log(res.data);
            setAllproducts(res.data);
        }).catch((error)=>{})
    
    };
  return (
    <div style={{padding:"50px"}}>
        <h2>All products</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt repudiandae reiciendis soluta adipisci perspiciatis explicabo fuga ipsa excepturi quae recusandae facere minus modi, animi omnis nulla quia saepe, quibusdam deleniti.</p>
    <button onClick={getProducts}>Get Products</button>
    
    <div className="allProductsData">

         {
          allproducts.map(function(product){
            return <Card
            
             image={product.image}
             price={product.price}
             title={product.title}
            
            
            />
          })
         }


    </div>
    
    
    
    
    </div>
  )
}

export default AllProducts
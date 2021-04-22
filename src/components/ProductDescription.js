import React from 'react'
import {useContext} from "react";
import {useEffect,useState} from 'react';
import {useParams} from "react-router-dom"


import ProductsContext from "../context/ProductsContext";



const ProductDescription = () => {
 // alert("inside Product Desc")
   // const { selectedProduct } = useContext(ProductsContext);
    const {id} = useParams();
    const [products,setProducts] = useState({});
    var rate;
 
 useEffect(()=>{
   fetch("https://pure-meadow-01496.herokuapp.com/products/"+id)
   .then(res=>res.json())
   .then((json)=>{
     console.log("json.body"+JSON.stringify(json.body));
     setProducts(json.body[0])
 
 
   })
   .catch(err=>console.log(`Error ${err}`));

 },[])

 console.log("Product Name ParseInt:"+parseInt(products.rating)+"Type:"+typeof(parseInt(products.rating)));

 switch(products.rating) {
  case "5":
    rate = 5;
    break;
  case "4":
    rate = 4;
    break;
  case "3":
    rate = 3;
    break;
  case "2":
    rate = 2;
    break;
  default:
   rate=1;
}

 
// var stars = Array(rate).fill(0);
 

    return (    
        <div className="grid grid-col-2"  >
        <div className="productDescBox">
        <span className = "categoryhead"> <img className ="img-large"src={products.productImageBig} alt="" ></img></span>
        </div>
        <div className="productDescBox">
        <span className="details">{products.productName}</span>
        <span className="product__rating">      
        
        {Array(rate)
          .fill()
          .map((_, i) => (
            <p>🌟</p>            
          ))}
       
      </span>
       <p> Price:<span style={{color: "red"}}>CDN${products.productPrice}</span></p>
        <span className=""><p>{products.productDesc1}</p></span>
        <span ><p>{products.productDesc2}</p></span>
        <span ><p>{products.productDesc3}</p></span>
       
        {products.stock ?<span style={{color: "green",fontWeight:"bold"}}><p>In stock</p></span>:<span style={{color: "red",fontWeight:"bold"}}><p>Out of stock</p></span>}
        
        {products.stock ? <span ><p>
        <label for="quantity">Quantity:</label>
        <select name="quantity" id="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      </p></span>: 
      <span ><p>
        <label for="quantity">Quantity:</label>
        <select name="quantity" id="quantity" disabled="true">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      </p></span>}
      <span ><p>
        <button class="css-button  css-button-icon css-button-text" ><i class="fa fa-cart-plus" aria-hidden="true"></i>&nbsp;&nbsp;Add to Cart</button>
        </p></span><br/><br/><br/><br/>
      </div>
     
        </div>
    )
}

export default ProductDescription


import React from 'react'

import ProductsContext from "../context/ProductsContext";
import {useContext} from "react";
import ProductItem from "./ProductItem"
import ScrollMenu from 'react-horizontal-scrolling-menu';

const BestSeller = () => {
    const {products} = useContext(ProductsContext);

   
        const bestSellerProducts1 =products.filter((p)=>{
            //alert("CategoryId:"+categoryId+" p.CategoryId:"+ p.categoryId)
                    return p.isBestSeller==true                
                })
            //    alert(JSON.stringify(filteredProducts));
     
    return (
        <>
        
        <p class="headings-section">
        Best Sellers
        </p>
       
        <div  className="">  
        <ScrollMenu
        arrowLeft={<div style={{ fontSize: "40px" }}>{" < "}</div>}
        arrowRight={<div style={{ fontSize: "40px" }}>{" > "}</div>}       
        data= {bestSellerProducts1.map((product, index) => (<ProductItem key={product.id} id={product.id} prodImage={product.productImageSmall} prodName={product.productName} rating= {product.rating} bestSeller= {product.isBestSeller}  index= {index} source="bestSeller"
            product={product}  >                
         </ProductItem>))}         
         />
        </div>
      
       </>
    )
}

export default BestSeller

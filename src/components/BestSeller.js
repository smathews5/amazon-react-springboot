import React from 'react'

import ProductsContext from "../context/ProductsContext";
import {useContext} from "react";
import ProductItem from "./ProductItem"


const BestSeller = () => {
    const {products} = useContext(ProductsContext);

   
        const bestSellerProducts =products.filter((p)=>{
            //alert("CategoryId:"+categoryId+" p.CategoryId:"+ p.categoryId)
                    return p.isBestSeller==true                
                })
            //    alert(JSON.stringify(filteredProducts));
     
    return (
        <>
       
        <p class="headings-section">
        Best Sellers
        </p>
       
        <div  className="grid grid-col-3">  
               
        {bestSellerProducts.map((product, index) => (<ProductItem key={product.id} id={product.id} prodImage={product.productImageSmall} prodName={product.productName} rating= {product.rating} bestSeller= {product.isBestSeller} index= {index} source="bestSeller"
            product={product}  >                
         </ProductItem>))}         
     
        </div>
      
       </>
    )
}

export default BestSeller

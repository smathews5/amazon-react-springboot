import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import {useContext} from "react";
import ProductsContext from "../context/ProductsContext";

const MenuItem = (props) => {
    const {products, storeFilteredProducts,storeCategoryName} = useContext(ProductsContext);
    
    const history = useHistory();
    const goToProductsPage = () => history.push('/products');

    const categoryId =props.catId;
  
    const filterProducts = ()=>{
        const filteredProducts =products.filter((p)=>{
          //  alert("CategoryId:"+categoryId+" p.CategoryId:"+ p.categoryId)
                    return p.categoryId==categoryId;                
                })
               //alert("Filtered Products:"+JSON.stringify(filteredProducts));
                storeFilteredProducts(filteredProducts);
              
             
    } 
    
    return (
        <div className="inlinedis">
      
        <span id="catLink" onClick={()=>{

           // alert("Inside OnclicK")
            filterProducts()        
           
            storeCategoryName(props.name);
         
            goToProductsPage()
      }
          }>{props.name} </span>            
          
        </div>
    )
}

export default MenuItem

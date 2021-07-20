import React from 'react'
//import "../css/style.css";
import MenuItem from "./MenuItem"
import {useContext} from "react";
import { useState } from "react";
import ProductsContext from "../context/ProductsContext";
import  {Link} from 'react-router-dom'




const Navigationbar = () => {
  const {mainMenu,storeCategoryName,products,storeFilteredProducts} = useContext(ProductsContext)
 
  const [categoryName ,setCategoryName] = useState();
 // storeCategoryName(categoryName);

 // alert ("MainMenu:"+JSON.stringify(mainMenu))
 const showProducts = () => {

    storeFilteredProducts(products);
    
 }


    return (
        <div>
              
          <div className="header header__option">
       
          <span className="navbar" >
          <Link to = "/bestseller" style={{ color: '#FFF',textDecoration: 'none'}}> Best Seller &nbsp;&nbsp;&nbsp;&nbsp;</Link>
         
           {mainMenu.map((menu)=>(<MenuItem  key ={menu.id} catId = {menu.id} name = {menu.categoryName}  >
            </MenuItem>  ))
          } &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
         
          <Link to = "/products" style={{ color: '#FFF',textDecoration: 'none'}} onClick={(e) => {
            showProducts()
       
            storeCategoryName("All Products");
          }
          }> Product List &nbsp;&nbsp;</Link>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <Link to = "/signin" style={{ color: '#FFF',textDecoration: 'none', textAlign:'right'}}>Admin</Link>
         </span>
          
        </div>
        
        </div>
    )
}

export default Navigationbar

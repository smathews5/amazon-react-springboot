import React from 'react'
import {useContext} from "react";
import CategoryItem from "./CategoryItem"
import ProductsContext from "../context/ProductsContext";


const CategoryList = () => {
    const {productCategory,products,getProductbyCategory} = useContext(ProductsContext)

    //alert(JSON.stringify(props.productCategory))
    return (
        <>
        <p className ="category-header">Browse Category</p>
              <div className="grid grid-col-4">
           
                {productCategory.map((category) => (<CategoryItem
                    category={category} products={products} getProductByCategory={getProductbyCategory} >
                </CategoryItem>))}

                  </div>
         </>
     
    )
}

export default CategoryList

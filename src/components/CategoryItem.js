import React from 'react'
import ProductItem from "./ProductItem"
import {useContext} from "react";
import { useHistory } from 'react-router-dom';
import ProductsContext from "../context/ProductsContext";



const CategoryItem = (props) => {
    const history = useHistory();
    const goToProductsPage = () => history.push('/products');
    const {products, storeFilteredProducts,storeCategoryName} = useContext(ProductsContext);

    //alert("Category Item"+JSON.stringify(props.category))
   
const categoryId =props.category.id;

/*let filteredProducts = props.products.filter((p)=>{
    //  alert("Product:"+JSON.stringify(product));
    return p.categoryId===categoryId;
}*/
const filterProducts = ()=>{
    const filteredProducts =products.filter((p)=>{
     //   alert("CategoryId:"+categoryId+" p.CategoryId:"+ p.categoryId)
                return p.categoryId==categoryId;                
            })
        //    alert(JSON.stringify(filteredProducts));
            storeFilteredProducts(filteredProducts);

         
}

/*
//const [filteredProducts, setfilteredProducts] = useState(filteredProducts);
const productList = props.getProductByCategory(categoryId);
    const displayProducts = ()=>{
        alert(categoryId);
     //   alert("CAtegory:"+JSON.stringify(props.category));
  alert(JSON.stringify(props.products))

    }

 */
//alert("Filtered Products:"+JSON.stringify(filteredProducts));
    return (
        <>
    
        <div className="container">       
    
     
      <span className = "categoryBox"> <img src={props.category.categoryImage} alt=""  onClick={()=>{

        //alert("Inside OnclicK")
        filterProducts()
        storeCategoryName(props.category.categoryName);
        goToProductsPage()
  }
      }
    ></img></span>
    <center><span className="catogoryName">{props.category.categoryName}</span></center>
          </div>
        

            
       
</>
     

            
      
    )
}

export default CategoryItem

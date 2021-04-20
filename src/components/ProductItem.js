import React from 'react'
import { useHistory } from 'react-router-dom';
import {useContext} from "react";
import {Link} from "react-router-dom";
import ProductsContext from "../context/ProductsContext";

const ProductItem = ({id,prodImage,prodName,bestSeller,index, source,rating}) => {
 
  //  alert(id);
    const { storeSelectedProduct} = useContext(ProductsContext);
  // alert(props.product.productImageSmall)
   const history = useHistory();
  // const goToProductDescrPage = () => history.push('/productsDescription');
  // alert(props.product)

  const selectedProduct = ()=>{
 //   alert("selectedProduct"+JSON.stringify(props.product));
   // storeSelectedProduct(props.product);         
    }

 
    return (
       
        <div className="container">
      
        <div>  
    
    {source!="bestSeller" && bestSeller ?  (<span class="badge badge-warning tile" style={{fontSize: "14px"}}>BestSeller</span>) :(<span></span>)  }
       
    
   {source=="bestSeller" ? (<span className="badge  badge-warning tile" style={{fontSize: "14px"}}>#{index+1}</span>) :(<span></span>) }
  

        <span className = "productBox"> 
        <Link to = {"/product/"+id}><img src={prodImage} alt="" ></img></Link>
        </span>
        </div>
        <div className="">
        <span className=""><Link to = {"/product/"+id} style={{ textDecoration: 'none',color:'black' }}>{prodName}</Link></span>
        </div>
        <div className="product__rating">
        {Array(parseInt(rating))
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </div>

      
        </div>
    )
}

export default ProductItem

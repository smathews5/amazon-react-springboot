
import React from "react";
import "../css/App.css"
import "../css/style.css";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import amazonlogo from '../images/amazon_logo.png';
import canadaflag from '../images/canadaflag.png';
import ProductsContext from "../context/ProductsContext";
import {Redirect}  from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const { productCategory, products, storeFilteredProducts, filteredProducts, getFilteredProducts,storeCategoryName} = useContext(ProductsContext);
  const history = useHistory();
 
  const goToProductsPage = () =>{
    const latestFilteredProducts = getFilteredProducts();
    history.push('/products');

  } 
  const goToHomePage = () => history.push('/');

  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [searchBox, setSearchBox] = useState("")
  const [selectedCategoryName, setSelectedCategoryName] = useState("All");

  const getCategoryId = () => {
    
    
        let selectedCategory = productCategory.filter((category) => {
          return category.categoryName === selectedCategoryName
        })

        return selectedCategory[0].id;
      
  }

  const filterProducts = () => {

    let productsByCategory = [];

    if (selectedCategoryName === "All") {
      productsByCategory = products;
      storeFilteredProducts(products);
      const filteredProductsByName = productsByCategory.filter((p) => {
        return p.productName.includes(searchBox);
      }
      )
      if (filteredProductsByName) {
        storeFilteredProducts(filteredProductsByName);
      } else {
        storeFilteredProducts(productsByCategory);
      }
      storeCategoryName("All Products");
    }

    else {
      
      const filteredProductsByCategory = products.filter((p) => {
        return p.categoryId == getCategoryId();
      }
      )
      productsByCategory = filteredProductsByCategory;
      const filteredProductsByName = productsByCategory.filter((p) => {
        return p.productName.includes(searchBox);

      }
      )
      if (filteredProductsByName) {
        storeFilteredProducts(filteredProductsByName);
      } else {
        storeFilteredProducts(productsByCategory);
      }
         storeCategoryName(selectedCategoryName);
    }
   
  }

  const handleSubmit = e => {
    e.preventDefault();
       // or you can send data to backend
       filterProducts()
       goToProductsPage()

  };
  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    handleSubmit();
  }
};

  return (
    <div className="header">

      <Link to onClick={() => {
        storeFilteredProducts([]);
        storeCategoryName("");
        goToHomePage()

      }} >

        <img className="header__logo" src={amazonlogo} />

      </Link>
      
      <div >
        <form>
          <select id="mySelect" className="header__dropdown" onChange={(evt) => {
            
            setSelectedCategoryName(evt.target.value);
          }}>
            <option>All</option>

            {productCategory.map((category) => (

              <option value={category.categoryName} >{category.categoryName} </option>
            )
            )
            }
          </select>
        </form>
      </div>

      <div className="header__search">

        <input className="header__searchInput" type="text" value={searchBox} onChange={(evt) => {

          setSearchBox(evt.target.value);
          
        }}
        onKeyPress={(evt) => {
         // alert(evt.key.value)
          if (evt.key === 'Enter') {
          filterProducts()
          goToProductsPage()
          setSearchBox("")
          }
        }
        }
        
        />


        <FaSearch className="header__searchIcon" onClick={(e) => {
          filterProducts()
          goToProductsPage()
        }
        }
        />
      </div>

      <div className="header__nav">
        <div className="header__option">
        </div>
        <img className="flag__header" src={canadaflag} />
        <div className="header__option">
        {sessionStorage.getItem("username") !=null ?  ( <span className="header__optionLineOne">Hello{sessionStorage.getItem("username")}</span>) : (<span className="header__optionLineOne">Hello Guest</span>) }
       
          <Link to="/signin"> <span className="header__optionLineTwo">Sign In</span></Link>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Try</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <FaShoppingCart style={{width: '30px',height:'30px' }}/>
          <span className="header__optionLineTwo header__basketCount">
            0
            </span>
        </div>
       
      </div>
    </div>
  );
}
export default Header;
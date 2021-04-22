

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Hero from "./Hero";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import ProductDescPage from "../pages/ProductDescPage";
import BestSellerPage from "../pages/BestSellerPage";
import DashboardPage from "../pages/DashboardPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ScrollToTop from './ScrollToTop'


import ProductsContext from "../context/ProductsContext";


import cameras from '../images/Cameras.jpg';
import home_decor from '../images/home_decor.jpg';
import appliances from '../images/appliances.jpg';
import laptops from '../images/Laptops.jpg';
import lighting from '../images/Lighting.jpg';
import canon_small from '../images/Canon_EOS_Rebel_T7_small.jfif';
import canon_big from '../images/Canon_EOS_Rebel_T7.jpg';
import nikon_small from '../images/Nikon_small.jfif';
import nikon_big from '../images/Nikon_large.jpg';

import "../css/App.css";

import { useState, useEffect } from 'react'



const App = () => {

  const [productCategory, setProductCategory] = useState([]); 
  const [products, setProducts] = useState([]);
  const [mainMenu, setMainMenu] = useState([productCategory]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedcatName, setSelectedCatName] = useState([]);  
  const [bestsellers, setBestSellers] = useState([]); 

  const history = useHistory();
  

  React.useEffect(() => {
    const fetchProductCat = () => {     
      //const endPointProdCat = "http://localhost:7000/categories";
      const endPointProdCat = "https://pure-meadow-01496.herokuapp.com/categories";
      
      fetch(endPointProdCat)

        .then((res) => {
          return res.json()
        })

        .then((json) => {
          setProductCategory(json.body);       
          const mainMenuInit = json.body.filter((cat) => {
            return cat.isNavbarItem === true
          });
          setMainMenu(mainMenuInit);
          console.log("MainMenu "+JSON.stringify(mainMenu))
        })
    }
    fetchProductCat();
  }, []);




  React.useEffect(() => {
    const fetchProducts = () => {    
    //  const endPointProducts = "http://localhost:7000/products";
    const endPointProducts = "https://pure-meadow-01496.herokuapp.com/products";
     
      fetch(endPointProducts)

        .then((res) => {
          return res.json()
        })

        .then((json) => {         
         setProducts((previousState)=>{  
          previousState = json.body;
         return previousState
        });
         
        })
    }
    fetchProducts();
  }, []);


  React.useEffect(() => {
    const fetchBestSellers = () => {    
     // const endPointBestSellers = "http://localhost:7000/bestsellers";
     const endPointBestSellers = "https://pure-meadow-01496.herokuapp.com/bestsellers";
     
      fetch(endPointBestSellers)

        .then((res) => {
          return res.json()
        })

        .then((json) => {         
         setBestSellers((previousState)=>{  
          previousState = json.body;
         return previousState
        });
         
        })
    }
    fetchBestSellers();
  }, []);


  const mainMenuInit = productCategory.filter((cat) => {
    return cat.isNavbarItem === true
  });


const getFilteredProducts = ()=>{
  return filteredProducts;
}


  const getProductbyCategory = (inputCategoryId) => {
    let productList = products.filter((product) => {
      return product.categoryId === inputCategoryId
    }
    )
    return productList;
  }



  const storeFilteredProducts = (filtereProducts) => {
    setFilteredProducts(filtereProducts);
  }
  const storeSelectedProduct = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
  }
  const storeCategoryName = (selectedcatName) => {
    setSelectedCatName(selectedcatName);
  }




  return (
    <div>
      <ProductsContext.Provider value={{ mainMenu, productCategory, products, getProductbyCategory, filteredProducts, storeFilteredProducts, storeSelectedProduct, selectedProduct, getFilteredProducts,storeCategoryName,selectedcatName}}>
   
       <Router>
       <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <ProductsPage />
            </Route>
            <Route path="/product/:id">
              <ProductDescPage />
            </Route>
            <Route path="/bestseller">
              <BestSellerPage />
            </Route>
            <Route path="/signin">
              <SignInPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/dashboard">
              <DashboardPage/>
            </Route>           
          </Switch>
          </ScrollToTop>
        </Router>
      </ProductsContext.Provider>
    </div>
  )
}

export default App

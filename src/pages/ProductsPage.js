import React from 'react'


import Header from "../components/Header";

import ProductList from '../components/ProductList';
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";

const ProductsPage = () => {
    return (
        <div>
        <Header/>
        <Navigationbar />    
        <ProductList />
        <Footer/>
        </div>
    )
}

export default ProductsPage

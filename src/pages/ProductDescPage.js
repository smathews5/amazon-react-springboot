import React from 'react'
import ProductDescription from '../components/ProductDescription';
import Navigationbar from "../components/Navigationbar";
import Header from "../components/Header";
import Footer from "../components/Footer";



const ProductDescPage = () => {
    return (
        <div>
        <Header/>
        <Navigationbar />      
     <ProductDescription />
     <Footer/>
        </div>
    )
}

export default ProductDescPage

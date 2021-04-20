import React from 'react'

import Header from "../components/Header";
import CategoryList from '../components/CategoryList';

import ProductList from '../components/ProductList';
import Navigationbar from "../components/Navigationbar";
import BestSeller1 from "../components/BestSeller1";
import BootstrapCarousel from "../components/BootstrapCarousel";
import Footer from "../components/Footer";
import "../css/carousel.css";

const Home = () => {
    return (
        <div>
        <Header/>
        <Navigationbar />
        <BootstrapCarousel/>
        <CategoryList/>
        <ProductList/>        
        <BestSeller1/>
        <Footer/>
        </div>
    )
}

export default Home

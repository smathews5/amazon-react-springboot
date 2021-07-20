import React from 'react'
import Checkout from '../components/Checkout';
import Navigationbar from "../components/Navigationbar";
import Header from "../components/Header";
import Footer from "../components/Footer";


const CheckoutPage = () => {
    return (
        <div>
        <Header/>
        <Navigationbar />  
         <Checkout/>
       <Footer/>
        </div>
    )
}

export default CheckoutPage

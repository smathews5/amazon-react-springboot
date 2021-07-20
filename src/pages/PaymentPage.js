import React from 'react'
import Payment from '../components/Payment';
import Navigationbar from "../components/Navigationbar";
import Header from "../components/Header";
import Footer from "../components/Footer";


const PaymentPage = () => {
    return (
        <div>
        <Header/>
        <Navigationbar />  
         <Payment/>
       <Footer/>
        </div>
    )
}

export default PaymentPage
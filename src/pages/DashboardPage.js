import React from 'react'
import Dashboard from '../components/Dashboard';
import Navigationbar from "../components/Navigationbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashboardPage = () => {
    return (
        <div>
        <Header/>
        <Navigationbar />  
         <Dashboard/>
       <Footer/>
        </div>
    )
}

export default DashboardPage

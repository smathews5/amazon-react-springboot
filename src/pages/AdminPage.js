import React from 'react'
import Admin from '../components/Admin';
import Navigationbar from "../components/Navigationbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AdminPage = () => {
    return (
        <div>
        <Header/>
        <Navigationbar />  
         <Admin/>  
         <Footer/>
        </div>
    )
}

export default AdminPage


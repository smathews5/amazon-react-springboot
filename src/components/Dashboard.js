import React from 'react'

import {useState} from "react";



const Dashboard = () => {
    const [customerInfo, setCustomerInfo]  = useState("");


    var username = window.sessionStorage.getItem("username");
        const endPointcustomer = "http://localhost:7000/customerbyusername/"+ username;
                
                    fetch(endPointcustomer)              
                      .then(res => res.json())              
                      .then((json) => {
                  setCustomerInfo(json.body[0]);                            
                    
                      })

                      window.sessionStorage.setItem("name", customerInfo.name);
    return (
        <>
       <div className="">
         <div className = "headingmain">Customer Dashboard</div>   <br/>
         
          <div className = "headingdiv"> Welcome {customerInfo.name} !!! </div> 
           <div className= 'grid grid-col-dashboard'>
           <div className="dash-p"><span className="footer-span">Here is your Account  Details:</span>
           
           <div>
           Name:   {customerInfo.name}        
           </div>
           <div>
           Email:           {customerInfo.email}   
           </div>
           
           <div>
           Username:           {customerInfo.username}   
           </div>
           
           <div>
           Password:           {customerInfo.password}   
           </div>       
                      
           
           </div>
           <div className="footer-p"><span className="footer-span"></span>
           
           
           </div>
          
           <div className="footer-p"><span className="footer-span"></span></div>
         </div>
        </div>
        </>
    )
}

export default Dashboard

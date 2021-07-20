import React from 'react'
import {useState} from 'react'
import { useContext } from "react";

import amazonlogo from '../images/Amazon.ca-LogoWhite.png';
import  {Link} from 'react-router-dom'
import ProductsContext from "../context/ProductsContext";

const SiginForm = () => {
    const { storeFilteredProducts,  storeCategoryName, customerInfo,storeCustomerInfo} = useContext(ProductsContext);
    const [username, setUsername]  = useState("");
    const [password, setPassword]  = useState("");
    const [errorUsername, setErrorUsername]  = useState("");
    const [errorPassword, setErrorPassword]  = useState("");
   
 

    const validateForm = ()=>{
      
        let isValidated = true;
            if(username === "")
            {
                setErrorUsername("Please enter your username");
                isValidated=false;
            }

            else
            {
                setErrorUsername("")
            }


            if(password === "")
            {
                setErrorPassword("You must enter a password");
                isValidated=false;
            }

            else
            {
                setErrorPassword("")
            }


            return isValidated;
    
    }
    const [customer, setCustomer] = useState({
        username: "",       
        password: "",       
        errorUsername: "",       
        errorPassword: "",
       
    })
    const submitForm = (event) => {      
        event.preventDefault();

        const newCustomer={
            username: username,
            password: password,
            errorUsername: errorUsername,
            errorPassword: errorPassword            
        };     


        if (validateForm()) {
    
            fetch("http://localhost:7000/auth", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
               // body: JSON.stringify(customer)
               body: JSON.stringify(newCustomer)
            })
                .then(res => res.json())
                .then(data => {                  
             alert(data.message);
                  if(data.message==="You logged in successfully"){
                    window.sessionStorage.setItem("username", username);
                
                      window.location.href="/dashboard";
                  }
                  else
                  {
                    window.sessionStorage.setItem("username","");
                  }
                

                })
                .catch(err => console.log(`Error : ${err}`))

        } 
       
    }



    return (
        <div>
       <center> 
       <Link to ="/" onClick={() => {
        storeFilteredProducts([]);
        storeCategoryName("");
      
      }} ><img  src={amazonlogo} alt =""></img></Link></center>
        <form action="/" method="POST" onSubmit={submitForm}>
        <div className= "">
        <div className="form-control-container">

            <label htmlFor="username"> User Name</label>

            <input className="form-control" type="text" id="username"  value={username} onChange={(event)=>{
             
              setUsername(event.target.value)

            }}/>
            <span className="error">{errorUsername}</span>

        </div>

        <div className="form-control-container">
            
            <label htmlFor="description"> Password</label>
            <input className="form-control" type="text" id="password" value={password} onChange={(event)=>{
                setPassword(event.target.value)
            }}/>
            <span className="error">{errorPassword}</span>
        
        </div>
    
        <div className="form-control-container">
            <button  className="signInsignUpbtn" type="submit"
                       
            >Sign-In</button>
        </div>  
</div>
<p  className=" form-control-container info"><Link to="#">Need help?</Link></p>
        <div className=" form-label">
<br/><br/>
      New to Amazon ? 

    </div>

    <div className="form-control-container">
    <Link to = "/signup" style={{textDecoration: 'none'}}>  <button  className="signInsignUpbtn" type="button"
        
    >Create Amazon account</button></Link >
</div>  
    </form> 
        </div>
    )
}

export default SiginForm

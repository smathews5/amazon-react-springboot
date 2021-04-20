import React from 'react'
import { useState } from 'react'
import { useContext } from "react";
import amazonlogo from '../images/Amazon.ca-LogoWhite.png';
import ProductsContext from "../context/ProductsContext";
import { Link } from 'react-router-dom'



const SignUpForm = () => {
    const { storeFilteredProducts, storeCategoryName } = useContext(ProductsContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const validateForm = () => {
       
        let isValidated = true;
      

        if (customer.name === "") {
            setErrorName("You must enter a name")
            isValidated = false;
        } else {
            setErrorName("")
            isValidated = true;

        }

        if (!customer.email || customer.email === "") {
            setErrorEmail("You must enter a email")
            isValidated = false;
        }
        else {
            setErrorEmail("")
            isValidated = true;

        }



        if (customer.password === "") {
            setErrorPassword("You must enter a password")
      
            isValidated = false;
        } else if (customer.password.length < 6 || customer.password.length > 12) {
            setErrorPassword("Your password must be 6 to 12 characters");     
            isValidated = false;
        }  else if (customer.password.search(/[a-z]/i) < 0) {
            setErrorPassword("Your password must contain at least one letter");     
            isValidated = false;
        }
        else if (customer.password.search(/[0-9]/) < 0) {
            setErrorPassword("Your password must contain at least one sinu");     
            isValidated = false;
        }  else if (!customer.password.match(/^[0-9a-zA-Z]+$/)) {
            setErrorPassword("Your password must contain only letters and numbers");     
            isValidated = false;
        }
        else if (customer.password != customer.confirmPassword) {
            setErrorPassword( "Confirm password must be same as Password");     
            isValidated = false;
        }
        else {
            setErrorPassword("")
            isValidated = true;

        }

        return isValidated;
    }

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorName: "",
        errorEmail: "",
        errorPassword: "",
        errorConfirmPassword: ""
    })

    const submitForm = (event) => {
      
        event.preventDefault();
        if (validateForm()) {


            fetch("http://localhost:7000/customers", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
            })
                .then(res => res.json())
                .then(data => {
                    alert('The customer ${data.name} was registered successfully!!!!')
                    setCustomer({
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        errorName: "",
                        errorEmail: "",
                        errorPassword: "",
                        errorConfirmPassword: ""
                    })

                })
                .catch(err => console.log(`Error : ${err}`))

        } 
        /*else{
           event.preventDefault();
           setCustomer({
               name: "",
               email: "",
               password: "",
               confirmPassword:"",
               errorName: "",
               errorEmail:"",
               errorPassword:"",
               errorConfirmPassword:""
           })
        }*/
    }



    return (
        <div>
            <center> <Link to="/" onClick={() => {
                storeFilteredProducts([]);
                storeCategoryName("");

            }} ><img src={amazonlogo} alt=""></img></Link></center>


            <form action="/" method="POST" onSubmit={submitForm}>

                <div className="form-control-container">

                    <label htmlFor="name"> Your name</label>

                    <input className="form-control" type="text" id="name" value={customer.name} onChange={(event) => {
                        setCustomer({
                            ...customer,
                            name: event.target.value
                        })

                    }} />
                    <span className="error">{errorName}</span>

                </div>
                <div className="form-control-container">

                    <label htmlFor="email"> Email</label>

                    <input className="form-control" type="text" id="email" value={customer.email} onChange={(event) => {
                        setCustomer({
                            ...customer,
                            email: event.target.value
                        })

                    }} />
                    <span className="error">{errorEmail}</span>

                </div>

                <div className="form-control-container">

                    <label htmlFor="description"> Password</label>
                    <input className="form-control" type="text" id="password" placeholder="Atleast 6 characters" value={customer.password} onChange={(event) => {
                        setCustomer({
                            ...customer,
                            password: event.target.value
                        })
                    }} />
                    <span className="label">i &nbsp;</span>Password must consist of atleast 6 characters
             <span className="error">{errorPassword}</span>

                </div>

                <div className="form-control-container">

                    <label htmlFor="confirmPassword"> Confirm Password</label>
                    <input className="form-control" type="text" id="confirmPassword" value={customer.confirmPassword} onChange={(event) => {
                        setCustomer({
                            ...customer,
                            confirmPassword: event.target.value
                        })
                    }} />
                    <span className="error">{errorConfirmPassword}</span>

                </div>
                <br />
                <div className="form-control-container">
                    <button className="signInsignUpbtn" type="submit"

                    >Create your Amazon account</button>
                </div>
            </form>
            <p className=" form-control-container info">Already have an account?<Link to="/signin"> <span style={{ fontWeight: 'bold' }}>SignIn</span></Link></p>
        </div>
    )
}

export default SignUpForm

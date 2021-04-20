import React from 'react'
import amazonlogo from '../images/amazon_logo.png';
import canadaflag from '../images/canada-flag-wave-small.png';


const Footer = () => {


    return (
        <div>
      <div className="footer-section">
        <center><img className="footer__logo" src={amazonlogo} /> <img className="flag__logo" src={canadaflag} /></center>
       
        <div  className="grid grid-col-4">
        <span><p className="footer-p"><span className="footer-span">Get to know us</span><br/> Careers<br/> Amazon and our Planet <br/> Press Releases </p></span>
    
       
        <span><p className="footer-p"><span className="footer-span">Make Money with Us</span><br/> Sell on Amazon<br/> Advertise your products <br/> Independently Publish with Us </p></span>
        <span><p className="footer-p"><span className="footer-span">Amazon Payment Products</span><br/> Amazon.ca Rewards Mastercard<br/> Shop with Points <br/> Gift Cards </p></span>
        <span ><p className="footer-p"><span className="footer-span">Let Us Help You</span><br/> COVID-19 and Amazon<br/> Shipping Rates & Policies <br/> Amazon Prime </p></span>
        </div>
     

         </div>
        </div>
    )
}

export default Footer

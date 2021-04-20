import React from 'react'



const Dashboard = () => {
    return (
        <>
        <div className="">
         <div>Customer Dashboard</div>   <br/>
         
          <div>Welcome {sessionStorage.getItem("username")} </div> 
           <div className= 'grid grid-col-3'>
           <div className="footer-p"><span className="footer-span">Your Account</span>
           
           <div>
           Name:           
           </div>
           <div>
           Email:           
           </div>
           
           <div>
           Username:           
           </div>
           
           <div>
           Password:           
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

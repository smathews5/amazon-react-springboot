import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  

const BootstrapCarousel = () => {
    return (  
        <div>  
         <div className='container-fluid' >  
          <div className="row title" style={{ marginBottom: "20px" }} >  
          <div className="col-sm-12 btn btn-warning">  
         
         </div>  
         </div>  
         </div>  
         <div className='container-fluid' >  
         <Carousel>  
         <Carousel.Item style={{'height':"300px"}} >  
         <img style={{'height':""}}  
         className="d-block w-100"  
        src={'assets/img/hero2.jpg'}  />  
           <Carousel.Caption>  
             <h3></h3>  
                 </Carousel.Caption>  
                 </Carousel.Item>  
                 <Carousel.Item style={{'height':"300px"}} >  
                 <img style={{'height':""}}  
                 className="d-block w-100"  
                src={'assets/img/hero1.jpg'}  />  
                   <Carousel.Caption>  
                     <h3></h3>  
                         </Carousel.Caption>  
                         </Carousel.Item>  
                 <Carousel.Item style={{'height':"300px"}}>  
                 <img style={{'height':""}}  
                   className="d-block w-100"  
                    src={'assets/img/hero4.jpg'}    />  
                       <Carousel.Caption>  
                   <h3></h3>  
                      </Carousel.Caption>  
                         </Carousel.Item>  
                       <Carousel.Item style={{'height':"300px"}}>  
                       <img style={{'height':""}}  
                        className="d-block w-100"  
                         src={'assets/img/hero3.jpg'}   />  
                        <Carousel.Caption>  
                        <h3></h3>  
                          </Carousel.Caption>  
                         </Carousel.Item>  
                        </Carousel>  
                </div>  
        </div>  
)  
}

export default BootstrapCarousel

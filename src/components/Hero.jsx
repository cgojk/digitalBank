import React from "react";
import heroimage from "../images/bg-intro-mobile.svg";
import heroimagedesktop from "../images/bg-intro-desktop.svg";
import { Link } from "react-router-dom";
import phones from "../images/image-mockups.png";



 export default function Hero() {
  return (
   <section className="hero container">
  
        <div className="image__hero">
            <picture className="image__hero">
                <source
                    media="(min-width: 1024px)"
                    srcSet={heroimagedesktop}
                />
                <img
                 src={heroimage}
                 alt="Illustration of people reading books"
                 />
            </picture>
               <img src={phones} alt="Illustration of phones" 
                className="image__overlay--background"
                 loading="lazy"/>

         </div>
         <div className="wrapper__title--text-button">
            <h1 className="hero__title">Next Generation digital banking</h1>
            <p className="hero__text">Take your financial life online.  Your Digitalbank
                account will be a one -stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <button className="btn btn--primary">Request Invite</button>
         </div>
       
    </section>
   );
 }

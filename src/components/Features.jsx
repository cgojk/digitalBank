import React from "react";


import datafeatures from "../datafeatures";




 export default function Features() {
  return (
   <section className="features container">
  
       <h1 className="features__title">Why choose Digitalbank?</h1> 
       <p className="features__text">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
       <div className="features__info">
            {datafeatures.map((feature) => (
              <div key={feature.id} className="features__item">
                <img className="features__item__icon" src={feature.icon} alt={feature.alt} />
                <h2 className="features__item__title">{feature.title}</h2>
                <p className="features__item__text">{feature.description}</p>
              </div>
            ))}
       </div>
    </section>
   );
 }

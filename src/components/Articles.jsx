import React from "react";


import articlesInfo from "../articlesinfo";




 export default function Articles() {
  return (
   <section className="articles container">
  
       <h1 className="articles__title">Latest Articles</h1> 
      
            {articlesInfo.map((article) => (
              <div key={article.id} className="articles__item">
                <img className="articles__item__image" src={article.image} alt={article.alt} />
                <div className="articles__item__content">
                  <p className="articles__item__author">{article.author}</p>
                  <h2 className="articles__item__title">{article.title}</h2>
                  <p className="articles__item__description">{article.description}</p>
                </div>
              </div>
            ))}
       
    </section>
   );
 }

import React from "react";


import articlesInfo from "../articlesinfo";




 export default function Articles() {
  return (
   <section className="articles__container container">
  
       <h1 className="articles__title">Latest Articles</h1> 
       <ul className="wrapper__image--description">
            {articlesInfo.map((article) => (
              <li key={article.id} className="articles__item">
                <div className="container__image">
                 <img className="articles__item__image" src={article.image} alt={article.alt} />
                </div>
                <div className="articles__item__content">
                  <p className="articles__item__author">{article.author}</p>
                  <h2 className="articles__item__title">{article.title}</h2>
                  <p className="articles__item__description">{article.description}</p>
                </div>
              </li>
             
            ))}
            </ul>
       
    </section>
   );
 }

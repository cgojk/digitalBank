import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Articles from "../components/Articles";
import Footer from "../components/Footer";



 export default function Home() {
  return (
   <section className="home container">
    <Hero />
    <Features />
    <Articles />
    <Footer />
    
       
    </section>
   );
 }

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Cards from "./Cards";
import Testimonial from "./Testimonial";
import Service from "./Service";
import Footer from "./Footer"

function App() {
  return (
    <div>
      {/* Inserting Components */}
    <Navbar/>
    <Hero/>
    <Categories/>
    <Cards/>
    <Testimonial/>
    <Service/>
    <Footer/>
    </div>
  );
}

export default App;

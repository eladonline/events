import React, { Component } from "react";
import Hero from "src/components/hero/Hero";
import Navbar from "src/components/navbar/navbar";
import Carousle from "src/components/carousle/carousle";
import Teaser from "src/components/teaser/teaser";
import Gallery from "src/components/gallery/Gallery";
import data from "src/data/screens/homepage";
import Slide from "src/components/carousle/serviceSlide";
import About from "./About";
import ContactUs from "../components/contactUs/contactUs";

// import Recommendation from "src/components/recommendation/Recommends.js";

const Homepage = props => {
  return (
    <div className="home">
      <Hero data={data.hero} />
      <div className="background-provider">
        <Navbar />
        <Carousle slide={Slide} slides={data.serviceSlides} />
        <Teaser />
        <About />
        <ContactUs />
        {/* <Recommendation data={data} /> */}
        {/* <Gallery list={data.gallery} /> */}
      </div>
    </div>
  );
};

export default Homepage;

// data for computer
// {
//   "head": "מחשבים מוכני מציאות מדומה",
//   "text": "מחשבים עוצמתיים להרצת מציאות מדומה.",
//   "src": "/static/image/carousel/vr_computer_carousle.jpg",
//   "link": "/vr-computers"
// }

import React, { Component } from "react";
import Hero from "src/components/hero/Hero";
import Navbar from "src/components/navbar/navbar";
import Carousle from "src/components/carousle/carousle";
import Teaser from "src/components/teaser/teaser";
import Gallery from "src/components/gallery/Gallery";
import carousleData from "src/data/screens/homepage";
import Slide from "src/components/carousle/serviceSlide";
// import Recommendation from "src/components/recommendation/Recommends.js";

export default class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <div className='background-provider'>
          <Navbar />
          <Carousle slide={Slide} slides={carousleData.serviceSlides} />
          <Teaser />
          {/* <Recommendation data={carousleData} /> */}
          <Gallery list={carousleData.gallery} />
        </div>
      </div>
    );
  }
}

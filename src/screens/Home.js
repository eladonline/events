import React, { Component } from 'react';
import Hero from 'src/components/hero/Hero';
import Navbar from 'src/components/navbar/Navbar';
import Carousle from 'src/components/carousle/Carousle';
import About from 'src/components/aboutUs/AboutUs';
import Gallery from 'src/components/gallery/Gallery';
import carousleData from 'src/data/screens/homepage';
import Slide from 'src/components/carousle/serviceSlide';
import Recommendation from 'src/components/recommendation/Recommends.js';

export default class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Navbar />
        <Carousle slide={Slide} slides={carousleData.serviceSlides} />
        <About />
        <Recommendation data={carousleData} />
        <Gallery />
      </div>
    );
  }
}

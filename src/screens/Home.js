import React, { Component } from 'react';
import Hero from 'src/components/hero/Hero';
import Navbar from 'src/components/navbar/Navbar';
import Carousle from 'src/components/carousle/Carousle';
import About from 'src/components/aboutUs/AboutUs';
import Gallery from 'src/components/gallery/Gallery';
export default class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Navbar />
        <Carousle />
        <About />
        <Gallery />
      </div>
    );
  }
}

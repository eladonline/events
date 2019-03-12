import React, { Component } from 'react';
import Hero from 'src/components/hero/Hero';
import Navbar from 'src/components/navbar/navbar';
import Carousle from 'src/components/carousle/carousle';
import About from 'src/components/aboutUs/aboutUs';

export default class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Navbar />
        <Carousle />
        <About />
      </div>
    );
  }
}

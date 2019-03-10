import React, { Component } from 'react';
import Hero from 'src/components/hero/Hero';
import Navbar from 'src/components/navbar/navbar';
import Carousle from 'src/components/carousle/carousle';


export default class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Navbar />
        <Carousle />
      </div>
    );
  }
}

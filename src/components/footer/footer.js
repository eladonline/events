import React, { useState } from 'react';
import Contact from './contactForm';
const Footer = () => {
  return (
    <footer className="footer">
      <div>LOGO</div>
      <header>
        <h4>!צור איתנו קשר</h4>
      </header>
      <Contact />
    </footer>
  );
};

export default Footer;

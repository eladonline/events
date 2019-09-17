import React, { useEffect } from 'react';
import Navbar from 'src/components/navbar/navbar.js';
import Hero from './Hero';
import { SwiperCube } from 'src/components/swiper/swiper';
import CardsList from 'src/components/cardsList/CardsList';

const ServicePage = ({ hero, head, subHead, gallery, serviceList }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="static-page">
      <Hero {...hero} />
      <div className="static-page__space-placeholder" />
      <Navbar />

      <div className="static-page__content">
        <div className="grid">
          <header>
            <h4>{head}</h4>
          </header>
          <p>{subHead}</p>

          {/** GALLERY */}
          <div className="static-page__content__swiper-container">
            <SwiperCube list={gallery} />
          </div>
          <header>
            <h4>!מבחר האפשרויות שלנו</h4>
          </header>
          {/** List if Services */}
          <div className="static-page__content__services">
            <CardsList list={serviceList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

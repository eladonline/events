import React from 'react';
import { SwiperCube } from 'src/components/swiper/swiper';



const Gallery = () => {
  return (
    <div className="gallery">
      <div className="grid">
        <header>
          <h4>הגלריה שלנו</h4>
        </header>
        <SwiperCube />
      </div>
    </div>
  );
};

export default Gallery;

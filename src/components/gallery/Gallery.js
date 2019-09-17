import React from 'react';
import { SwiperCoverFlow } from 'src/components/swiper/swiper';



const Gallery = ({ list }) => {
  return (
    <div className="gallery">
      <div className="grid">
        <header>
          <h4>הגלריה שלנו</h4>
        </header>
        <SwiperCoverFlow list={list} />
      </div>
    </div>
  );
};

export default Gallery;

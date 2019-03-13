import Navbar from 'src/components/navbar/Navbar.js';
import Hero from './Hero';
import { SwiperCube } from 'src/components/swiper/swiper';
const StaticPage = ({ children, hero, head, subHead, list }) => {
  return (
    <div className="static-page">
      <Hero {...hero} />
      <Navbar />

      <div className="static-page__content">
        <div className="grid">
          <header>
            <h4>{head}</h4>
          </header>
          <p>{subHead}</p>
          <div className='static-page__content__swiper-container'>
            <SwiperCube list={list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticPage;

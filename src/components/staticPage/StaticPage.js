import Navbar from 'src/components/navbar/Navbar.js';
import Hero from './Hero';
import { SwiperCube } from 'src/components/swiper/swiper';
import CardsList from 'src/components/cardsList/CardsList';

const StaticPage = ({ children, hero, head, subHead, gallery, serviceList }) => {
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

export default StaticPage;

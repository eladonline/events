import { useEffect, useState } from "react";
import { SlideSwipe } from "../swiper/swiper";

const Hero = ({ data }) => {
  const [isMobile, setisMobile] = useState(true);
  useEffect(() => {
    setisMobile(innerWidth < 768);
  }, []);
  return (
    <>
      <div className="hero">
        <SlideSwipe list={isMobile ? data.mobile : data.desktop} />

        <div className="hero__overlay">
          <header>
            <h1>VR-Era</h1>
            <h2>חנות למציאות מדומה</h2>
          </header>
        </div>
      </div>
      <div className="hero-placeholder" />
    </>
  );
};

export default Hero;

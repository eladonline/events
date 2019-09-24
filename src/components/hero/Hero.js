import { SlideSwipe } from "../swiper/swiper";

const SlideSwiper = ({data, lazyLoad}) => {
  if (lazyLoad) {
    const mobile = innerWidth < 768;
    return mobile ? (
      <SlideSwipe list={data.mobile} />
    ) : (
      <SlideSwipe list={data.desktop} />
    );
  }
};

const Hero = (props) => {
  return (
    <>
      <div className="hero">
        <SlideSwiper {...props} />

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

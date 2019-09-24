import Carousle from "../carousle/carousle";
import Slide from "../carousle/serviceSlide";
import data from "/src/data/ads/data.json";

const AdsStrip = () => {
  return (
    <div className="ads-strip">
      <div className="grid">
        <header>
          <h5>אולי יעניין אותך גם</h5>
        </header>
        <Carousle autoplay Slide={Slide} slides={data.ads} />;
      </div>
    </div>
  );
};
export default AdsStrip;

import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { SwiperCoverFlow, SwiperCube } from "../../components/swiper/swiper";
import Link from "next/link";
import AdsStrip from "../adsStrip/adsStrip";
const ProductPage = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product vr-glasss">
      <Navbar />
      <div className="product__gallery">
        <div className="product__gallery__gallery">
          <SwiperCoverFlow list={data.cube} />
        </div>
        <div className="product__gallery__cube">
          <SwiperCube list={data.cube} />
        </div>
      </div>
      <div className="grid">
        <div className="product__header">{data.hero}</div>
        <div className="product__prodacts-cards">
          <ProductCards list={data.products} />
        </div>
      </div>
      <AdsStrip />
    </div>
  );
};

export default ProductPage;

const ProductCards = ({ list }) => {
  return list.map((item, i) => {
    return (
      <React.Fragment key={`ProductCards${i}`}>
        <Link href={`/${item.url}`}>
          <li
            className="product__prodacts-cards__item"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {item.name}
          </li>
        </Link>
      </React.Fragment>
    );
  });
};

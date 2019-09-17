import React from "react";
import Navbar from "../components/navbar/navbar";
import { SwiperCoverFlow, SwiperCube } from "../components/swiper/swiper";
import data from "../data/screens/vrGlasss.json";
import Link from "next/link";
const VrGlasss = () => {
  return (
    <div className="product">
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
    </div>
  );
};

export default VrGlasss;

const ProductCards = ({ list }) => {
  return list.map((item, i) => {
    return (
      <Link href={item.url}>
        <li
          className="product__prodacts-cards__item"
          key={`ProductCards${i}`}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          {item.name}
        </li>
      </Link>
    );
  });
};

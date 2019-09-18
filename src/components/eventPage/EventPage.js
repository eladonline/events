import React, { useState, useEffect } from "react";
import Hero from "../ServicePage/Hero";
import Navbar from "src/components/navbar/navbar.js";
import Modal from "src/components/modal/ModalCard";
import CardDetailes from "../templates/cardDetailes";

const EventPage = ({ hero, services }) => {
  const [addToCart, setAddToCart] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (addToCart)
      setTimeout(() => {
        setAddToCart(false);
      }, 500);
  }, [addToCart]);

  return (
    <div className="event-page">
      <Hero {...hero} />
      <div className="background-provider">
        <Navbar addCartTrigger={addToCart} />
        <HeadAlist
          triggerAddCart={setAddToCart}
          header="סוגי מוצרים!"
          list={services.base}
        />
      </div>
    </div>
  );
};

export default EventPage;

const HeadAlist = ({ header, list, triggerAddCart }) => {
  const parseList = list => {
    return list.map((props, i) => {
      return (
        <Modal
          key={`event_${i}_${props.service}`}
          {...props}
          detailes={<CardDetailes {...props.description.detailes} />}
          triggerAddCart={triggerAddCart}
        />
      );
    });
  };
  return (
    <div className="event-page__container">
      <header>
        <h4>{header}</h4>
      </header>
      {/** List if Services */}
      <div className="event-page__container__services">
        <div className="grid">{parseList(list)}</div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import Hero from "../ServicePage/Hero";
import Navbar from "src/components/navbar/navbar.js";
import Modal from "src/components/modal/ModalCard";

const EventPage = ({ hero, services, manufactureData }) => {
  const [addToCart, setAddToCart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
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
          list={services.base}
          manufactureData={manufactureData}
        />
      </div>
    </div>
  );
};

export default EventPage;

const parseList = (list, triggerAddCart) => {
  return list.map((props, i) => {
    return (
      <Modal
        key={`event_${i}_${props.service}`}
        {...props}
        title={props.service}
        detailes={props.description.detailes}
        triggerAddCart={triggerAddCart}
      />
    );
  });
};

const parseInfo = aData => {
  return aData.map(oLine => <p key={oLine.text}>{oLine.text}</p>);
};
const HeadAlist = ({ list, triggerAddCart, manufactureData }) => {
  return (
    <div className="event-page__container">
      <section>
        {/** data of manufacture */}
        {manufactureData && (
          <div className="grid">
            <header>
              <h4>מידע על היצרן</h4>
            </header>
            {parseInfo(manufactureData)}
          </div>
        )}
      </section>
      <div className="grid">
        <header>
          <h4>סוגי מוצרים!</h4>
        </header>
        {/** List of Services */}
        <div className="event-page__container__services">
          {parseList(list, triggerAddCart)}
        </div>
      </div>
    </div>
  );
};

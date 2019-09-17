import React, { useState, useEffect } from "react";
import Hero from "../ServicePage/Hero";
import Navbar from "src/components/navbar/navbar.js";
import Modal from "src/components/modal/ModalCard";

const EventPage = ({ hero, services }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="event-page">
      <Hero {...hero} />
      <div className="background-provider">
        <Navbar />
        <HeadAlist header="סוגי מוצרים!" list={services.base} />
      </div>
    </div>
  );
};

export default EventPage;

const HeadAlist = ({ header, list }) => {
  /**
   *
   * @param {array} list - of objects {service: 'צלם מגנטים', description: 'שנים'}
   */
  const parseList = list => {
    return list.map(({ service, description, background }, i) => {
      return (
        <Modal
          key={`event_${i}_${service}`}
          title={service}
          text={description.text}
          img={description.spec}
          background={background}
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

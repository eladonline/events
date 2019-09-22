import React from "react";
import EventPage from "src/components/eventPage/EventPage.js";
import data from "src/data/products/accessories/controllers/data.json";

const Controllers = () => {
  return <EventPage {...data} />;
};

export default Controllers;

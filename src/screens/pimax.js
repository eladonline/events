import React from 'react';
import EventPage from 'src/components/eventPage/EventPage.js';
import data from 'src/data/products/pimax/data.json'

const ValveIndex = () => {
  return <EventPage {...data}/>;
};

export default ValveIndex;

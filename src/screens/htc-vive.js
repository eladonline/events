import React, { useState } from 'react';
import EventPage from 'src/components/eventPage/EventPage.js';
import data from 'src/data/products/htcVive/data.json'

const HtcVive = () => {
  return <EventPage {...data}/>;
};

export default HtcVive;

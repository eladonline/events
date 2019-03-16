import React, { useState } from 'react';
import EventPage from 'src/components/eventPage/EventPage.js';
import data from 'src/data/event/barMitzva/data.json'

const BarMitzva = () => {
  return <EventPage {...data}/>;
};

export default BarMitzva;

import React, { useState } from 'react';
import EventPage from 'src/components/eventPage/EventPage.js';
import data from 'src/data/event/oculuse/data.json'

const Oculuse = () => {
  return <EventPage {...data}/>;
};

export default Oculuse;

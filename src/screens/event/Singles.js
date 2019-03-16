import React, { useState } from 'react';
import EventPage from 'src/components/eventPage/EventPage.js';
import data from 'src/data/event/singles/data.json'

const Singles = () => {
  return <EventPage {...data}/>;
};

export default Singles;

import React, { useState } from 'react';
import EventPage from 'src/components/eventPage/EventPage.js';
import data from 'src/data/event/brit/data.json'

const Brit = () => {
  return <EventPage {...data}/>;
};

export default Brit;

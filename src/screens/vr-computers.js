import React, { useState } from 'react';
import EventPage from 'src/components/eventPage/EventPage.js';
import data from 'src/data/event/vrComputers/data.json'

const VrComputers = () => {
  return <EventPage {...data}/>;
};

export default VrComputers;

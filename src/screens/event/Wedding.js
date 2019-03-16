import React, { useState } from 'react';
import EventPage from 'src/components/eventPage/EventPage.js';
import data from 'src/data/event/wedding/data.json'

const Wedding = () => {
  return <EventPage {...data}/>;
};

export default Wedding;

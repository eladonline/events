import React, { useState } from 'react';
import EventPage from 'src/components/eventPage/EventPage.js';
import data from 'src/data/event/company/data.json'

const Company = () => {
  return <EventPage {...data}/>;
};

export default Company;

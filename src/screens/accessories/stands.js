import React  from 'react';
import EventPage from 'src/components/eventPage/EventPage.js';
import data from  'src/data/products/accessories/stands/data.json'

const Stands = () => {
  return <EventPage {...data}/>;
};

export default Stands;
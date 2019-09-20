import ValveIndex from "src/screens/valve-index.js";

import React, { useEffect } from "react";
import ReactGA from "react-ga";

export default () => {
  useEffect(() => {
    ReactGA.initialize("UA-148411020-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return <ValveIndex />;
};

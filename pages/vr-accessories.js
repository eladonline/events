import VrAccessories from "src/screens/vr-accessories.js";

import { vrAccessories } from "src/components/seo/seoDesc";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import ReactGA from "react-ga";

export default () => {
  useEffect(() => {
    ReactGA.initialize("UA-148541360-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <NextSeo {...vrAccessories} />
      <VrAccessories />
    </>
  );
};

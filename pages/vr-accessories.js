import VrAccessories from "src/screens/vr-accessories.js";
import { vrAccessories } from "src/components/seo/seoDesc";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { NextSeo } from "next-seo";

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

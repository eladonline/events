import HTC from "src/screens/htc-vive.js";
import ReactGA from "react-ga";
import React, { useEffect } from "react";
import { NextSeo } from "next-seo";
import { htcVive } from "src/components/seo/seoDesc";

export default () => {
  useEffect(() => {
    ReactGA.initialize("UA-148541360-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <NextSeo {...htcVive} />
      <HTC />
    </>
  );
};

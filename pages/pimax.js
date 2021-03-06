import Pimax from "src/screens/pimax.js";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { pimax } from "src/components/seo/seoDesc";
import { NextSeo } from "next-seo";

export default () => {
  useEffect(() => {
    ReactGA.initialize("UA-148541360-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <NextSeo {...pimax} />
      <Pimax />
    </>
  );
};

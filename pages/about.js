import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Navbar from "../src/components/navbar/navbar";
import About from "../src/screens/About";

export default () => {
  useEffect(() => {
    ReactGA.initialize("UA-148541360-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Navbar />
      <About />
    </>
  );
};

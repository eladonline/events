import Router from "next/router";
import React, { useEffect } from "react";

const Slide = ({ head, text, src, srcMobile, link, flexCenter = false }) => {
  let mobile = true;
  useEffect(() => {
    mobile = innerWidth < 768;
  }, []);
  return mobile ? (
    <div
      onClickCapture={() => link && Router.replace(link)}
      className="carousle__item"
      style={{ backgroundImage: `url(${mobile ? srcMobile : src})` }}
    >
      <div className={`carousle__item__overlay ${flexCenter && "flex-center"}`}>
        <header>
          <h4>{head}</h4>
        </header>
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div>sad</div>
  );
};

export default Slide;

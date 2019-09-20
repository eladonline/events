import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const Carousle = ({ slides, flexCenter, slide }) => {
  const [test, setTest] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTest(true);
    }, 500);
  }, []);

  const parseSlidesList = list => {
    // if true text is in center of the slide
    // the slide component
    const Slide = slide;
    return list.map((obj, i) => {
      const key = Object.keys(obj);
      return (
        <Slide
          key={`carousle_${i}_${obj[key[0]]}`}
          {...obj}
          flexCenter={flexCenter}
        />
      );
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 566,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      {test && <Slider {...settings}>{parseSlidesList(slides)}</Slider>}
    </div>
  );
};

export default Carousle;

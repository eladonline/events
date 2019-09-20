import React from "react";
import Swiper from "react-id-swiper";

const parseSlides = list => {
  if (list)
    return list.map(({ src }) => {
      return <img key={src} src={src} className="swiper__item" />;
    });
};

export class SwiperCoverFlow extends React.Component {
  render() {
    const params = {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      initialSlide: 1,
      slidesPerView: "2",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 700,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: ".swiper-pagination"
      },
      breakpoints: {
        // when window width is <= 640px
        640: {
          slidesPerView: 1
        }
      }
    };
    return <Swiper {...params}>{parseSlides(this.props.list)}</Swiper>;
  }
}

export class SwiperCube extends React.Component {
  render() {
    const params = {
      effect: "cube",
      speed: 800,
      grabCursor: true,
      loop: this.props.list.length > 1,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      cubeEffect: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      pagination: {
        el: ".swiper-pagination"
      }
    };
    return <Swiper {...params}>{parseSlides(this.props.list)}</Swiper>;
  }
}

export class SlideSwipe extends React.Component {
  render() {
    const params = {
      spaceBetween: 0,
      centeredSlides: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true
      },
      pagination: {
        el: ".swiper-pagination",
      },

    };
    return <Swiper {...params}>{parseSlides(this.props.list)}</Swiper>;
  }
}

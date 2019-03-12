import React from 'react';
import Swiper from 'react-id-swiper';

const company_prom = '/static/image/gallery/company_prom.jpg';
const decoration = '/static/image/gallery/decoration.jpg';
const hero = '/static/image/gallery/hero2.jpg';
const khaled = '/static/image/gallery/khaled.jpg';
const teva = '/static/image/gallery/teva.jpg';

export class SwiperCube extends React.Component {
  render() {
    // const params = {
    //   effect: 'cube',
    //   speed: 500,
    //   grabCursor: true,
    //   loop: true,
    //   autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false
    //   },
    //   cubeEffect: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    //   },
    //   pagination: {
    //     el: '.swiper-pagination'
    //   }
    // };
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false
      // },
      loop: true,
      initialSlide: 1,
      slidesPerView: '2',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 700,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      },
      breakpoints: {
        // when window width is <= 640px
        640: {
          slidesPerView: 1
        }
      }
    };
    return (
      <Swiper {...params}>
        <img src={company_prom} className="swiper__item" />
        <img src={decoration} className="swiper__item" />
        <img src={hero} className="swiper__item" />
        <img src={khaled} className="swiper__item" />
        <img src={teva} className="swiper__item" />
      </Swiper>
    );
  }
}

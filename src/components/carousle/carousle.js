import React, { PureComponent } from 'react';
import Slider from 'react-slick';

class Carousle extends PureComponent {
  parseSlidesList = list => {
    // if true text is in center of the slide
    const { flexCenter } = this.props;
    // the slide component
    const Slide = this.props.slide;
    return list.map((obj, i) => {
      const key = Object.keys(obj);
      return <Slide key={`carousle_${i}_${obj[key[0]]}`} {...obj} flexCenter={flexCenter} />;
    });
  };

  render() {
    const { slides } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
    return <Slider {...settings}>{this.parseSlidesList(slides)}</Slider>;
  }
}

export default Carousle;

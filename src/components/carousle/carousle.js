import React, { PureComponent } from 'react';
import Slider from 'react-slick';

const juggle = '/static/image/jugle.jpg';
const magnets = '/static/image/magnets.jpg';
const dj = '/static/image/dj.jpg';
const decor = '/static/image/decor.jpg';
const foodStand = '/static/image/food_stand.jpg';
const videoPhotographer = '/static/image/video_photographer.jpg';
const shofarot = '/static/image/shofarot.jpg';
const videoAttraction = '/static/image/video_attraction.jpg';

const slides = [
  {
    head: 'אמני במה',
    text: '.סוחף ומלהיב את הקהל',
    src: juggle
  },
  {
    head: 'צלם מגנטים',
    text: '.מזכרת מאירוע בלתי נשכח',
    src: magnets
  },
  {
    head: 'תקליטן',
    text: '.מיקסים של השירים הכי חדשים',
    src: dj
  },
  {
    head: 'מעצב אירועים',
    text: '.לעיצוב מקום האירוע',
    src: decor
  },
  {
    head: 'דוכני מזון',
    text: '.כל סוגי הדוכנים גם משקאות',
    src: foodStand
  },
  {
    head: 'צלם אירועים',
    text: 'צילום תמונות ווידאו מקצועי לכל אירוע',
    src: videoPhotographer
  },
  {
    head: 'מעגל מתופפים ושופרות',
    text: '.מלווים עם תופים ושופרות גם בכותל',
    src: shofarot
  },
  {
    head: 'משחקי וידאו',
    text: '...מכונות משחקי וידאו קוסולות ועוד',
    src: videoAttraction
  }
];

class Carousle extends PureComponent {
  parseSlidesList = list => {
    return list.map((obj, i) => {
      return <Slide key={`carousle_${i}`} {...obj} />;
    });
  };

  render() {
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

const Slide = ({ head, text, src }) => {
  return (
    <div className="carousle__item" style={{ backgroundImage: `url(${src})` }}>
      <div className="carousle__item__overlay">
        <header>
          <h4>{head}</h4>
        </header>
        <p>{text}</p>
      </div>
    </div>
  );
};

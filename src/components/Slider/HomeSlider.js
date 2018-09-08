import React from 'react';
import Slider from 'react-slick';

import Img1 from '../../static/img/banner_main.jpg';
import Img2 from '../../static/img/banner-2.png';
import Img3 from '../../static/img/banner-3.png';

const HomeSlider = ({settings, list}) => (
  <div className="slider-container">
    <Slider {...settings}>
      {list.map((item, index) => (
        <div className="slider-item image-thumb" key={index}>
          <a href={item.link}>
            <img className="img-fluid" src={item.image_path} alt={item.name} style={{width: '100%'}} />
          </a>
        </div>
      ))}
    </Slider>
  </div>
);

HomeSlider.defaultProps = {
  settings: {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
};

export default HomeSlider;

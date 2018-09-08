import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import Slider from 'react-slick';

class ImageSlider extends Component {
  render() {
    const {settings} = this.props;
    return <Slider {...settings}>{this.props.children}</Slider>;
  }
}

ImageSlider.defaultProps = {
  settings: {
    // adaptiveHeight: true,
    arrows: false,
    dots: true,
    infinite: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'h-350'
  }
};

ImageSlider.propTypes = {
  settings: PropTypes.shape({
    adaptiveHeight: PropTypes.bool,
    arrows: PropTypes.bool,
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number
  })
};

export default withRouter(ImageSlider);

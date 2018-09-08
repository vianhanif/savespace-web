import Slider from 'react-slick';

import Img1 from '../../static/img/banner-1.png';
import Img2 from '../../static/img/banner-2.png';
import Img3 from '../../static/img/banner-3.png';

import React, {Component} from 'react';

class DetailSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: '',
      datas: ''
    };
  }

  componentWillMount() {
    this.setState({
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      },
      datas: this.props.datas
    });
  }
  render() {
    // console.log(this.state);
    return (
      <div className="slider-container">
        <Slider {...this.state.settings}>
          {this.state.datas.map((image, index) => {
            return (
              <div className="slider-item image-thumb" key={index}>
                <img
                  className="img-fluid"
                  src={image.original_path}
                  alt={image.id}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default DetailSlider;

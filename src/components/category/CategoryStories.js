import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import Request from 'axios';
import styled from 'styled-components';
import {bindActionCreators} from 'redux';
import {getListCategory} from '../../_actions/categoryActions';
import variableConstants from '../../_constants/variableConstants';

const CategoryStoriesWrap = styled.div`
  border: 1px solid #dfe3e6;
  background-color: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  .alert {
    i {
      font-size: 24px;
    }
    line-height: 17px;
    vertical-align: middle;
    display: flex;
    color: #ec9d00;
    padding: 11px 0;
    font-size: 12px;
    margin-bottom: 0;
  }
`;
const SliderWrap = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 10px 0 0 15px;
  max-width: 28rem;
  min-height: 100px;
  margin: 0 auto;
  .slick-slider {
    width: 100%;
    .slick-slide {
      text-align: left;
      .circle-category-title {
        text-align: center;
      }
    }
  }
`;
const SliderItem = styled.div`
  width: 50px;
  img {
    width: 58px;
    height: 58px;
  }
`;
class CategoryStories extends Component {
  static propTypes = {
    withLink: PropTypes.bool
  };
  static defaultProps = {
    withLink: false
  };
  state = {
    categories: [],
    sliderOptions: {
      swipeToSlide: true,
      slidesPerRow: 4,
      slidesPerScroll: 1,
      slidesToShow: 1.1,
      infinite: false,
      dots: false,
      arrows: false
    }
  };
  componentWillMount() {
    this.fetch();
  }
  fetch = () => {
    return Request.get(`${variableConstants.URL}/customer/categories`)
      .then(response => {
        this.setState({
          categories: response.data.data
        });
      })
      .catch(err => console.error(err.response.data.message));
  };
  render() {
    const {categories} = this.state;
    return (
      <CategoryStoriesWrap>
        <div className={this.props.withLink ? 'border-bottom' : ''}>
          <SliderWrap>
            <Slider
              style={{
                width: '100%'
              }}
              {...this.state.sliderOptions}>
              {categories.map(({id, name, image_medium_path}) => {
                return (
                  <SliderItem key={id}>
                    <Link to={`/category/${name}`}>
                      {image_medium_path != null ? (
                        <img
                          src={image_medium_path}
                          alt={name}
                          className={'image-fluid circle-category'}
                        />
                      ) : (
                        <img
                          className="img-fluid circle-category"
                          src="https://i.pinimg.com/originals/88/2a/f9/882af9c0182e042783837a9deb7c4c35.jpg"
                          alt="item not found"
                        />
                      )}
                      <div className="circle-category-title color-light-black">
                        {name}
                      </div>
                    </Link>
                  </SliderItem>
                );
              })}
            </Slider>
          </SliderWrap>
        </div>
        {this.props.withLink && (
          <div className="col-12 bg-white text-left">
            <Link to="/category">
              <div className="alert">
                <i className="mdi mdi-apps mdi-24px" />
                &nbsp; Lihat Semua Kategori
              </div>
            </Link>
          </div>
        )}
      </CategoryStoriesWrap>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({getListCategory}, dispatch)
  };
}

const mapStateToProps = ({categoryReducers}) => {
  return categoryReducers;
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CategoryStories)
);

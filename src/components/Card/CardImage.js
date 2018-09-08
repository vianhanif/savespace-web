import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Basket from 'mdi-react/BasketIcon';
import Tag from 'mdi-react/TagIcon';

import CardTag from './CardTag';
import ProgressiveImage from '../../shared/components/ProgressiveImage/ProgressiveImage';
const FloatingButton = styled.div`
  position: absolute;
  display: flex;
  bottom: 12px;
  left: 12px;
  text-transform: uppercase;
  font-weight: 700;
  @media screen and (max-width: 520px) {
    font-size: 12px;
  }
  cursor: pointer;
  padding: 4px 13px;
  border-radius: 15.5px;
  background-color: #fbfbfb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.082);
  .icon {
    margin-right: 0.5rem;
    pointer-events: none;
    display: inline-flex;
    vertical-align: middle;
    svg {
      fill: #ec9d00;
      path {
        fill: #ec9d00;
      }
    }
  }
  .text {
    display: inline-flex;
    vertical-align: middle;
    font-size: 0.625rem;
    font-weight: 800;
    line-height: 1.7;
  }
`;
const getPercentage = (tagPos, tagSize) => {
  return Math.floor(tagPos / tagSize * 100);
};

class CardImage extends Component {
  state = {
    active: false,
    image: '',
    click: false
  };
  componentWillMount() {
    if (
      this.props.subProducts &&
      this.props.withBuyTag &&
      this.props.subProducts.length !== 0
    ) {
      this.setState({
        active: false
      });
    } else {
      this.setState({active: true});
    }
  }
  toggleActive = () => {
    if (this.props.subProducts && this.props.subProducts.length !== 0) {
      return this.setState({active: !this.state.active});
    } else if (!this.props.withBuyTag) {
      return this.props.history.push(`/detail/${this.props.id}`);
    }
  };

  handleClick = () => {
    this.setState({click: true});
  };

  getDetails = () => {
    // TODO: Store on click
    this.state.active && this.props.history.push(`/detail/${this.props.id}`);
  };
  render() {
    const {
      primaryImage,
      images,
      subProducts,
      id,
      withBuyTag,
      vendor
    } = this.props;
    return (
      <div className="card-img">
        <div className="wrapper">
          {withBuyTag &&
            subProducts &&
            subProducts.length !== 0 &&
            this.state.active &&
            subProducts.map(sub_product => {
              const x = getPercentage(
                sub_product.tag_x_pos,
                sub_product.tag_original_width
              );
              const y = getPercentage(
                sub_product.tag_y_pos,
                sub_product.tag_original_height
              );
                if (sub_product.name.replace(/\./g, '').split(' ').length >= 3) {
                  sub_product.name =
                    sub_product.name
                      .replace(/\./g, '')
                      .split('')
                      .slice(0, 26)
                      .join('') + '...';
                } else {
                  sub_product.name =
                    sub_product.name.replace(/\./g, '').split(' ', 3).join(' ') + '...';
                }
              const onProductChosen = () =>
                this.props.onProductChosen(sub_product);
              return (
                <div key={sub_product.id} onClick={this.handleClick}>
                  <CardTag
                    price={sub_product.display_price}
                    title={sub_product.name}
                    vendor={sub_product.vendor_name}
                    horizontalPos={isNaN(x) ? '50%' : `${x}%`}
                    verticalPos={isNaN(y) ? '50%' : `${y}%`}
                    linked={onProductChosen}
                  />
                </div>
              );
            })}
          {primaryImage !== null && (
            <ProgressiveImage
              onClick={this.toggleActive}
              image={
                this.props.useMedium
                  ? primaryImage.medium_path
                  : primaryImage.original_path
              }
              preview={primaryImage.thumb_path}
            />
          )}
          {withBuyTag && (
            <FloatingButton onClick={this.toggleActive}>
              <div className="icon">
                <Basket size="14" color="#ec9d00" />
              </div>
              <div className="text">Tap Untuk Beli</div>
            </FloatingButton>
          )}
        </div>
      </div>
    );
  }
}

CardImage.defaultProps = {
  withBuyTag: true
};

export default withRouter(CardImage);

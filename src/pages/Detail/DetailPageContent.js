import React from 'react';
import ImageSlider from '../../components/Slider/ImageSlider';
import ProductSlider from '../../components/ProductDetail/ProductSlider';
import {Container} from '../Layout/Layout';
import {GUTTER_TYPE} from '../Layout/LayoutStyled';
import {White} from './DetailStyled';
import ProductDetail from '../../components/ProductDetail';
const DetailPageContent = props => {
  const {product, handleColorChange, handleSizeChange, handleAddToCart} = props;
  return (
    <div>
      <Container gutter={GUTTER_TYPE.NONE} noMargin>
        <ProductDetail {...props} />
      </Container>
    </div>
  );
};

export default DetailPageContent;

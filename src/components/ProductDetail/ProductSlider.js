import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from '../../shared/components/ProgressiveImage/ProgressiveImage';

const ProductSlider = ({productImage}) => (
  <div
    id={productImage.id}
    style={{position: 'relative', height: '350px', width: '100%'}}>
    <ProgressiveImage
      image={productImage.original_path}
      preview={productImage.thumb_path}
      alt={productImage.name}
    />
  </div>
);

ProductSlider.propTypes = {
  productImage: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    original_path: PropTypes.string
  })
};

export default ProductSlider;

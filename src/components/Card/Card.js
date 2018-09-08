import React from 'react';
import PropTypes from 'prop-types';
import CardImage from './CardImage';
import CardDetail from './CardDetail';
import ProgressiveImage from '../../shared/components/ProgressiveImage/ProgressiveImage';

const Card = ({product, indexKey, onProductChosen}) => {
  const isProduct = Object.keys(product).includes('sub_products')
  const isVendorPoint = product.vendor_point
  return (
    <div className="card card-noborder">
      <div className="card-header card-img-header no-padding card-noborder">
        {isProduct && (
          <CardImage
            primaryImage={product.primary_image}
            images={product.images}
            subProducts={product.sub_products}
            id={product.id}
            indexKey={indexKey}
            onProductChosen={onProductChosen}
          />
        )}
        {!isProduct && !isVendorPoint && (
          <div className="card-img">
            <div className="wrapper">
              <ProgressiveImage
                onClick={() => onProductChosen(product)}
                image={product.image_path}
                preview={product.image_path}
              />
            </div>
          </div>
        )}
      </div>
      {isProduct && <CardDetail caption={product.caption} />}
    </div>
  )
};

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    primary_image: PropTypes.object,
    sub_products: PropTypes.array,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        original_path: PropTypes.string
      })
    ),
    caption: PropTypes.string
  })
};

export default Card;

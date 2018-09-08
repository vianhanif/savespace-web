import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CardImage from './CardImage';

const CardListGrid = ({products}) => (
  <div className={'row'}>
    {products.map(product => {
      if (product.primary_image !== null) {
        return (
          <div className={'col-4'} style={{padding: "1px"}} key={product.id}>
            <Link to={`/detail/${product.id}`}>
              <CardImage
                primaryImage={product.primary_image}
                images={product.images}
                subProducts={product.sub_products}
                id={product.id}
                withBuyTag={false}
                useMedium
              />
            </Link>
          </div>
        );
      }
    })}
  </div>
);

CardListGrid.propTypes = {
  products: PropTypes.array.isRequired
};

export default CardListGrid;

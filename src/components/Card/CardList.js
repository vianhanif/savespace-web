import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Card from './Card';
import CardImage from './CardImage';
import CardListGrid from './CardListGrid';
import CardListColumn from './CardListColumn';

const CardList = ({products, grid = false, onProductChosen}) => {
  const cardListColumnProps = {
    products,
    onProductChosen
  }
  return grid 
    ? <CardListGrid products={products} />
    : <CardListColumn {...cardListColumnProps} />;
};

CardList.propTypes = {
  products: PropTypes.array.isRequired,
  grid: PropTypes.bool
};

export default CardList;

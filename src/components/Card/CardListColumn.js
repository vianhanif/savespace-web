import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Card from './Card';

class CardListColumn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {products} = this.props;
    return (
      <div className={'card-product'}>
        {products.map((product, key) => {
          const id = `${product.id}${key}`;
          if (product.primary_image !== null) {
            return (
              <div key={id} ref={card => (this[`x${key}`] = card)}>
                <Card
                  product={product}
                  indexKey={`x${key}`}
                  onProductChosen={this.props.onProductChosen}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

CardListColumn.propTypes = {
  products: PropTypes.array
};

export default CardListColumn;

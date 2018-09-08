import React from 'react';
import CardAction from './CardAction';

const CardDetail = ({caption}) => {
  const truncateDesc =
    caption &&
    caption.split(' ') &&
    caption.split(' ').slice(0, 25) &&
    caption
      .split(' ')
      .slice(0, 25)
      .join(' ');
  return (
    <div className="card-body">
      <CardAction />
      <span className="primary-title">
        {Math.floor(Math.random() * 89999 + 100000)} Orang Suka
      </span>
      <p className="primary-desc">
        {/* {product.description.substr(0, 700) + "..."} */}
        {`${truncateDesc}...`}
      </p>
    </div>
  );
};

export default CardDetail;

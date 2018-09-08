import React from 'react';
import PropTypes from 'prop-types';
import {CLASSES, LOADING_PRICE, LOADING_TITLE} from './constant';
import '@mdi/font/scss/materialdesignicons.scss';
import './Card.scss';
import styled from 'styled-components';
import {CurrencyFormatter} from '../../_helpers/CurrencyFormatter';

const Linked = styled.div`
  display: inline;
`;

const {string} = PropTypes;

const CardTag = ({
  title = LOADING_TITLE,
  vendor,
  price = LOADING_PRICE,
  verticalPos = 0,
  horizontalPos = 0,
  linked
}) => {
  return (
    <div
      className={CLASSES.TAG}
      onClick={linked}
      style={{
        top: verticalPos,
        left: horizontalPos,
        cursor: 'pointer'
      }}>
      <div className={CLASSES.DETAILS}>
        <div className={CLASSES.TITLE}>
          {title}
        </div>

        <div className={CLASSES.PRICE}> {CurrencyFormatter(price, 'IDR')}</div>
      </div>
      <Linked>
        <div className={CLASSES.ACTION}>
          <i className="mdi mdi-chevron-right mdi-24px" />
        </div>
      </Linked>
    </div>
  );
};

CardTag.propTypes = {
  title: PropTypes.string,
  vendor: PropTypes.string,
  price: PropTypes.string,
  linked: PropTypes.func,
  clicked: PropTypes.bool
};

export default CardTag;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkItem = styled.div`
  width: 100%
  background-color: #fff;
  font-size: 12px;
  letter-spacing: 0.2px;
  color: #5a6872;
  padding: 12px 22px;
  box-shadow: inset 0 -1px 0 0 #dfe3e6;
  cursor: pointer;
  i {
    font-size: 21px;
  }
  .link-text {
    display: inline-block;
    margin-left: 11px;
    line-height: 31px;
  }
`;
const MenuItem = ({icon, item}) => {
  return (
    <LinkItem>
      <i className={`mdi mdi-${icon} mdi-18px`} />
      <div className="link-text">{item}</div>
    </LinkItem>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string,
  item: PropTypes.string
};

export default MenuItem;

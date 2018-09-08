import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.scss';

const {string} = PropTypes;
const Tooltip = ({message, position, opacity}) => {
  return (
    <div
      className="ebaba-tooltip2"
      tooltip={message}
      tooltip-position={position}
      style={{opacity: opacity}}
    />
  );
};

Tooltip.propTypes = {
  message: string,
  position: string
};

export default Tooltip;

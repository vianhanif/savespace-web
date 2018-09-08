// @flow
import React, { Fragment } from 'react';
import './FilterMenuItem.scss';
import classNames from 'classnames';

const FilterMenuItem = ({ onClick, text, Icon, active }) => {
  return (
    <Fragment>
      <div className="filterMenuItem" onClick={onClick}>
        <span className="filterMenuItem__text">{text}</span>
        {Icon && (
          <div className="filterMenuItem__svgWrapper">
            <Icon fill={'#ec9d00'}/>
          </div>
        )}
        {<div className={classNames('line', {'active': active})}></div>}
      </div>
    </Fragment>
  );
};

export default FilterMenuItem;

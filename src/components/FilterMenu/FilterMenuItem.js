// @flow
import React, { Fragment } from 'react';
import './FilterMenuItem.scss';

export type Item = {
  onClick: Function,
  Icon: SVGElement | HTMLImageElement,
  text: string
};

const FilterMenuItem = ({ onClick, text, Icon }: Item) => {
  return (
    <Fragment>
      <div className="filterMenuItem" onClick={onClick}>
        <span className="filterMenuItem__text">{text}</span>
        <div className="filterMenuItem__svgWrapper">
          <Icon fill={'#ec9d00'}/>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterMenuItem;

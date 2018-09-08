// @flow
import React, {Fragment} from 'react';

import {connect} from 'react-redux';
import FilterMenuItem from './FilterMenuItem';
import {withRouter} from 'react-router-dom';
import './FilterMenu.scss';


const FilterMenu = props => {
  console.log(props)
  const { history, menus } = props;
  return (
    <Fragment>
      <div className="filterMenu">
        {menus.map((item, index) => (
          <FilterMenuItem {...item} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default withRouter(connect(mapStateToProps, null)(FilterMenu));

// @flow
import React, {Fragment} from 'react';

import {connect} from 'react-redux';
import FilterMenuItem, {type Item} from './FilterMenuItem';
import {withRouter} from 'react-router-dom';

import AppIcon from 'mdi-react/AppsIcon';
import SortAlphabetical from 'mdi-react/SortAlphabeticalIcon';
import FilterVariantIcon from 'mdi-react/FilterVariantIcon';
import './FilterMenu.scss';


const FilterMenu = props => {
  const { history } = props;
  const items = [
    {
      text: 'Kategori',
      onClick: () => history.push('/category'),
      Icon: AppIcon
    },
    {
      text: 'Urutkan',
      onClick: props.activateSort,
      Icon: SortAlphabetical
    },
    // {
    //   text: 'Filter',
    //   onClick: () => console.log('Filter'),
    //   Icon: FilterVariantIcon
    // }
  ];
  return (
    <Fragment>
      <div className="filterMenu">
        {items.map((item: Item, index: number) => (
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

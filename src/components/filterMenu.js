import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import ModalComponent from '../components/modal/modal';
import SortModal from './modal/SortModal';
import FilterMenuContent from './FilterMenu/FilterMenu';

const FilterMenu = ({
  clickToSort,
  sortActive,
  activateSort,
  dismissModal,
  sortName = '',
  compact = true
}) => {
  const filterMenuProps = {
    activateSort
  };
  const sortModalProps = {
    active: sortActive,
    dismissModal,
    clickToSort
  };
  return (
    <div className="filter-menu bg-light border-bottom">
      <FilterMenuContent {...filterMenuProps} />
      <SortModal {...sortModalProps} />
    </div>
  );
};

FilterMenu.propTypes = {
  sortName: PropTypes.string,
  clickToSort: PropTypes.func.isRequired,
  sortActive: PropTypes.bool.isRequired,
  activateSort: PropTypes.func.isRequired,
  dismissModal: PropTypes.func.isRequired,
  compact: PropTypes.bool
};

export default FilterMenu;

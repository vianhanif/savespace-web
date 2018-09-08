import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// TODO: move to constants & add localization
const SORT_VALUES = {
  DATE_CREATED: {
    label: 'Terbaru',
    value: 'date_created',
    id: 1,
  },
  PRICE_LOW_HIGH: {
    label: 'Termurah',
    value: 'price_low_high',
    id: 2,
  },
  PRICE_HIGH_LOW: {
    label: 'Termahal',
    value: 'price_high_low',
    id: 3,
  },
  RECOMMENDED: {
    label: 'Rekomendasi',
    value: 'recommended',
    id: 4,
  },
};

const SortModal = ({ active, clickToSort }) => {
  const containerClass = classNames(`modal`, { ['active']: active });
  return (
    <div className={containerClass} tabIndex={'-1'}>
      <div className={'modal-dialog, modal-dialog-centered'} role={'document'}>
        <div className="modal-content">
          <div className="modal-body modal-sort-menu">
            {Object.keys(SORT_VALUES).map(sortKey => (
              <div
                key={sortKey.id}
                className="sort-group row border-bottom"
                onClick={clickToSort}>
                <label
                  htmlFor={sortKey.value}
                  className="col-10 col-form-label">
                  {sortKey.label}
                </label>
                <div className="col-2 margin-middle">
                  <input
                    type="radio"
                    name={sortKey.value}
                    className="form-control"
                    id={sortKey.value}
                    value={sortKey.value}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SortModal.propTypes = {
  active: PropTypes.bool.isRequired,
  clickToSort: PropTypes.func.isRequired,
};

export default SortModal;

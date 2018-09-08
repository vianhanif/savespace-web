import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SORT_VALUES} from '../../_constants/sortConstants';

const SortModal = ({active, clickToSort, products, dismissModal}) => {
  const containerClass = classNames(`modal fade`, {['show d-flex']: active});
  return (
    <Fragment>
      <div className={containerClass} tabIndex={'-1'}>
        <div
          className={'modal-dialog modal-dialog-centered m-auto'}
          style={{
            width: 312,
            position: 'relative'
          }}
          role={'document'}>
          <div className="modal-content">
            <div className="modal-body modal-sort-menu">
              {Object.keys(SORT_VALUES).map(sortKey => {
                const {id, value, label} = SORT_VALUES[sortKey];
                return (
                  <div key={id} className="sort-group row border-bottom">
                    <label htmlFor={value} className="col-10 col-form-label">
                      {label}
                    </label>
                    <div className="col-2 margin-middle">
                      <input
                        type="radio"
                        checked={products.sortBy === value}
                        name={value}
                        className="form-control"
                        id={value}
                        onClick={clickToSort}
                        onChange={() => null}
                        value={value}
                      />
                    </div>
                  </div>
                );
              })}
              <div
                className="sort-group row border-bottom"
                onClick={dismissModal}>
                <label className="col-12 col-form-label">Tutup</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames('modal-backdrop fade', {
          ['show']: active,
          ['d-none']: !active
        })}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.homeReducers
});

SortModal.propTypes = {
  active: PropTypes.bool.isRequired,
  clickToSort: PropTypes.func.isRequired,
  dismissModal: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(SortModal);

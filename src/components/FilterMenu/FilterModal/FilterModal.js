import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import WindowCloseIcon from 'mdi-react/WindowCloseIcon';
import './FilterModal.scss';
import {default as config} from '../../../_constants/variableConstants';
import { Loader } from '../..';

class FilterModal extends Component {
  state = {
    colors: [],
    sizes: [],
    isLoading: true
  };
  componentWillMount() {
    this.fetchProperties().then(properties => {
      return this.setState({
        sizes: properties[0].data,
        colors: properties[1].data,
        isLoading: false
      });
    });
  }
  fetchProperties = async () => {
    const properties = ['size', 'color'];
    return Promise.all([
      await (await fetch(
        `${config.URL}/customer/properties?search=${properties[0]}`
      )).json(),
      await (await fetch(
        `${config.URL}/customer/properties?search=${properties[1]}`
      )).json()
    ]);
  };
  render() {
    return (
      <Fragment>
        <div className="filterModal">
          <div className="filterModalTitle">
            Filter
            <div className="filterModalCloseIcon">
              <WindowCloseIcon color="#9b9b9b" size="19" />
            </div>
          </div>
          {!this.state.isLoading && <div className="filterModalForm">Form</div>}
        </div>
        <div className="filterModalBackdrop" />
      </Fragment>
    );
  }
}

export default FilterModal;

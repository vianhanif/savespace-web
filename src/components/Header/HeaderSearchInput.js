// @flow
import React, { Component, Fragment } from 'react';
import Magnify from 'mdi-react/MagnifyIcon';
import './HeaderSearchInput.scss';

type Props = {
  onChange: Function,
  value: string
};

class HeaderSearchInput extends Component {
  state = {
    searchKey: ''
  };
  handleChange = e => {
    this.setState({ searchKey: e.target.value }, () => {
      this.props.handleSearch(this.state.searchKey);
    });
  };
  render() {
    return (
      <Fragment>
        <div className="searchInputWrap">
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.searchKey}
            placeholder="Cari Produk di eBaba…"
          />
          <div className="magnifyIcon">
            <Magnify size={24} color="#ec9d00"/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HeaderSearchInput;

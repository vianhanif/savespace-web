import React, {Component} from 'react';
import Magnify from 'mdi-react/MagnifyIcon';

class searchForm extends Component {
  render() {
    const {onChange} = this.props;
    return (
      <div className="searchInputWrap">
        <input
          className="form-control"
          type="search"
          id="search-input"
          placeholder="Cari produk di Ebaba"
          onChange={e => onChange(e)}
        />
        <div className="magnifyIcon">
          <Magnify size={24} color="#ec9d00"/>
        </div>
      </div>
    );
  }
}

export default searchForm;

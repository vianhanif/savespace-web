import React, {Component, Fragment} from 'react';
import FilterMenu from '../FilterMenu/FilterMenu';
import './Header.scss';


class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="topHeader">
            <div className="headerInner">
              <label className="title">{this.props.title}</label>
            </div>
          </div>
          {this.props.menus && (
            <div className="bottomHeader">
              <div className="headerInner">
                <FilterMenu menus={this.props.menus} />
              </div>
            </div>
          )}
        </header>
      </Fragment>
    );
  }
}

export default Header;

import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import FilterMenu from '../FilterMenu/FilterMenu';
import EbabaLogo from '../../shared/svg-icons/EbabaLogo';
import AppIcon from 'mdi-react/AppsIcon';
import SortModal from '../modal/SortModal';
import SortAlphabetical from 'mdi-react/SortAlphabeticalIcon';
import FilterVariantIcon from 'mdi-react/FilterVariantIcon';
import './Header.scss';
import HeaderSearchInput from './HeaderSearchInput';
import FilterModal from '../FilterMenu/FilterModal/FilterModal';

class Header extends Component {
  state = {
    isHeaderActive: false
  };
  componentDidMount() {
    typeof window !== 'undefined' &&
      window.addEventListener('scroll', this.scrollListener);
  }
  componentWillUnmount() {
    typeof window !== 'undefined' &&
      window.removeEventListener('scroll', this.scrollListener);
  }
  scrollListener = () => {
    if (typeof window === 'undefined') {
      return false;
    }
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
    const scroll = {
      x: supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft,
      y: supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
          ? document.documentElement.scrollTop
          : document.body.scrollTop
    };
    if (scroll.y > 50) {
      this.setState({isHeaderActive: true, currentPos: scroll.y});
    } else {
      this.setState({isHeaderActive: false});
    }
    const runScroller = () => {
      if (this.state.currentPos < scroll.y) {
        this.setState({isHeaderActive: false});
      }
    };
    setTimeout(() => {
      // eslint-disable-line
      runScroller();
    }, 1500);
  };
  render() {
    const {onSearch} = this.props;
    const filterMenuProps = {
      activateSort: this.props.activateSort
    };
    const sortModalProps = {
      active: this.props.sortActive,
      dismissModal: this.props.dismissModal,
      clickToSort: this.props.clickToSort
    };
    const {bottomHide} = this.props;
    return (
      <Fragment>
        <header>
          <div className="topHeader">
            <div className="headerInner">
              <Link to="/">
                <div className="headerLogo">
                  <EbabaLogo />
                </div>
              </Link>
              <div className="searchInput">
                <Link to="/search">
                  <HeaderSearchInput />
                </Link>
              </div>
            </div>
          </div>
          {!bottomHide && (
            <div
              className={classNames('bottomHeader', {
                ['active']: this.state.isHeaderActive
              })}>
              <div className="headerInner">
                <FilterMenu {...filterMenuProps} />
                <SortModal {...sortModalProps} />
              </div>
            </div>
          )}
        </header>
        {/* <FilterModal /> */}
      </Fragment>
    );
  }
}

export default Header;

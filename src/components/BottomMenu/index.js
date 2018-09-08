import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, NavLink, withRouter} from 'react-router-dom';
import '@mdi/font/scss/materialdesignicons.scss';

import Tooltip from '../shared/Tooltip';

class BottomMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pillOpacity: 0
    };
  }

  render() {
    const {countCart, itemAdded} = this.props;

    return (
      <div
        className="bottom-menu fixed-bottom"
        style={{boxShadow: '0 5px 5px 5px rgba(0, 0, 0, 0.2)', zIndex: 1051}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12">
                  <div className="row">
                  <div className="col-3">
                      <NavLink
                        exact
                        to="/home"
                        className="color-white"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'inline-block'
                        }}>
                        {itemAdded ? (
                          <Tooltip
                            message="Produk ditambahkan ke keranjang"
                            position="top"
                            opacity={this.state.pillOpacity}
                          />
                        ) : null}

                        <i className="mdi mdi-bell mdi-24px">
                          {countCart > 0 ? (
                            <span className="shopping-cart-pill">
                              {countCart}
                            </span>
                          ) : null}
                        </i>
                        {/*<div className="bottom-menu-title">Keranjang</div>*/}
                      </NavLink>
                    </div>

                    <div className="col-3">
                      <NavLink
                        exact
                        to="/home"
                        className="color-white"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'inline-block'
                        }}>
                        <i className="mdi mdi-apps mdi-24px" />
                        {/*<div className="bottom-menu-title">Keranjang</div>*/}
                      </NavLink>
                    </div>

                    <div className="col-3">
                      <NavLink
                        exact
                        to="/home"
                        className="color-white"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'inline-block'
                        }}>
                        <i className="mdi mdi-email mdi-24px" />
                        {/*<div className="bottom-menu-title">Keranjang</div>*/}
                      </NavLink>
                    </div>

                    <div className="col-3">
                      <NavLink to="/home" className="color-white">
                        <i className="mdi mdi-tune mdi-24px" />
                        {/*<div className="bottom-menu-title">Keranjang</div>*/}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const mapStateToProps = ({cartReducers}) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomMenu);

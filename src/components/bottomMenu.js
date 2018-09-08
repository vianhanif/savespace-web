import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, NavLink, withRouter} from 'react-router-dom';
import '@mdi/font/scss/materialdesignicons.scss';

import {getCountListCart, removeItemAdded} from '../_actions/cartActions';
import Tooltip from '../components/shared/Tooltip';

class BottomMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pillOpacity: 0
    };
  }
  componentDidMount() {
    const {itemAdded} = this.props;
    this.props.actions.getCountListCart();

    if (itemAdded) {
      setTimeout(() => {
        this.props.actions.removeItemAdded(this.state.pillOpacity);
        this.setState({pillOpacity: 0});
      }, 5000);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {itemAdded} = nextProps;
    if (itemAdded) {
      this.setState({pillOpacity: 1});
    }
  }

  render() {
    const {countCart, itemAdded} = this.props;

    return (
      <div
        className="bottom-menu bg-light fixed-bottom"
        style={{boxShadow: '0 5px 5px 5px rgba(0, 0, 0, 0.2)', zIndex: 1051}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12">
                  <div className="row">
                    <div className="col-4">
                      <NavLink
                        exact
                        to="/"
                        activeClassName="color-gold"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'inline-block'
                        }}>
                        <i className="mdi mdi-home mdi-24px" />
                        <div className="bottom-menu-title">Beranda</div>
                      </NavLink>
                    </div>

                    {/* <div className="col-3">
                      <NavLink to="/wishlist" activeClassName="color-gold">
                        <i className="mdi mdi-heart-outline mdi-24px" />
                        <div className="bottom-menu-title">Wishlist</div>
                      </NavLink>
                    </div> */}

                    <div className="col-4">
                      <NavLink
                        exact
                        to="/cart"
                        activeClassName="color-gold"
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

                        <i className="mdi mdi-cart mdi-24px">
                          {countCart > 0 ? (
                            <span className="shopping-cart-pill">
                              {countCart}
                            </span>
                          ) : null}
                        </i>
                        <div className="bottom-menu-title">Keranjang</div>
                      </NavLink>
                    </div>

                    {/* <div className="col-3">
                      <NavLink exact to="#" activeClassName="color-gold">
                        <i className="mdi mdi-account-circle mdi-24px" />
                        <div className="bottom-menu-title">Masuk</div>
                      </NavLink>
                    </div> */}

                    <div className="col-4">
                      <NavLink exact to="/menu" activeClassName="color-gold">
                        <i className="mdi mdi-menu mdi-24px" />
                        <div className="bottom-menu-title">Menu</div>
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
    actions: bindActionCreators({getCountListCart, removeItemAdded}, dispatch)
  };
}

const mapStateToProps = ({cartReducers}) => {
  return cartReducers;
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomMenu);

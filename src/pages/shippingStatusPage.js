import React, {Fragment, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getShippingStatus} from '../_actions/shippingActions';

import * as Components from '../components';
import BottomMenu from '../components/bottomMenu';
import MenuCard from '../components/MenuPage/MenuCard';
import CheckoutStatus from '../components/MenuPage/CheckoutStatus';
import {logPageView, initGA} from '../shared/utils/Analytics';

class ShippingStatus extends Component {
  state = {
    active: false,
    no_resi: '',
    trackingData: null
  };
  componentDidMount(){
    initGA();
    logPageView();
  }

  onChangeAWB = e => {
    this.setState({no_resi: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getShippingStatus(this.state.no_resi).then(res => {
      // console.log(res);
      if (res.data !== null && res.rajaongkir !== null) {
        this.setState({
          active: true,
          trackingData: res
        });
      } else {
        this.setState({
          active: true,
          trackingData: null
        });
      }
    });
  };
  render() {
    return (
      <Fragment>
        <Components.topMenu>
          <Components.pageMenu>Status Pengiriman</Components.pageMenu>
        </Components.topMenu>
        <Components.contentWrapper
          contentName="menupage-content"
          padding="no-padding">
          <MenuCard type={1}>
            <form>
              <div className="shipping-card">
                <div className="shipping-card-body">
                  <div className="form-group">
                    <label htmlFor="inputResi">Nomor Resi</label>
                    <input
                      component="input"
                      name="no_resi"
                      type="text"
                      className="form-control"
                      id="inputResi"
                      placeholder="Masukkan Nomor Resi"
                      onChange={this.onChangeAWB}
                    />
                  </div>
                  <div className="card-footer bg-light">
                    <button
                      className="btn shipping-btn btn-block"
                      onClick={this.handleSubmit}
                      disabled={this.state.no_resi === ''}>
                      cek resi
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <CheckoutStatus
              active={this.state.active}
              trackingData={this.state.trackingData}
            />
          </MenuCard>
        </Components.contentWrapper>
        <BottomMenu />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  getShippingStatus: no_resi => dispatch(getShippingStatus(no_resi))
});

const mapStateToProps = state => ({
  shipping: state.shippingReducers
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShippingStatus)
);

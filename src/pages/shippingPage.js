import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import React, {Component} from 'react';

import {
  addShippingDetail,
  getListProvince,
  getListCity,
  getListDistrict
} from '../_actions/shippingActions';

import {getListCart} from '../_actions/cartActions';

import * as Components from '../components';

import ShippingAddressForm from '../components/form/shippingAddressForm';
import ShippingMenu from '../components/menu/shippingMenu';
import ShippingStepMenu from '../components/menu/shippingStepMenu';
import variableConstants from '../_constants/variableConstants';
import {logPageView, initGA} from '../shared/utils/Analytics';

class shippingPage extends Component {
  constructor(props) {
    super(props);

    const {history} = this.props;
    let sessionId = localStorage.getItem(variableConstants.SessionId);
    // console.log(this.props);

    if (sessionId) {
      this.props.actions.getListProvince(sessionId);
    } else {
      history.push('/');
    }
  }

  componentWillMount() {
    const {history} = this.props;
    this.props.actions.getListCart(history);
  }
  componentDidMount(){
    initGA();
    logPageView();
  }
  handleSubmit = values => {
    const {history} = this.props;
    const {shippingDetail} = this.props.shippingReducers;

    const addressData = Object.assign(shippingDetail, values);
    // console.log(payload);
    this.props.actions.addShippingDetail(addressData, history);
  };

  render() {
    const {allProvinces} = this.props.shippingReducers;
    return (
      <div className="shipping-page bg-light">
        <ShippingMenu />

        <ShippingStepMenu props={this.props} />
        <Components.contentWrapper contentName="shipping-content">
          <ShippingAddressForm
            data={this.props}
            provinces={allProvinces}
            onSubmit={this.handleSubmit}
          />
        </Components.contentWrapper>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addShippingDetail,
        getListCart,
        getListProvince,
        getListCity,
        getListDistrict
      },
      dispatch
    )
  };
}

const mapStateToProps = state => {
  return {
    shippingReducers: state.shippingReducers,
    cartReducers: state.cartReducers
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(shippingPage)
);

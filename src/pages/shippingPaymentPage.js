import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as Components from '../components';

import {addShippingPayment} from '../_actions/shippingActions';
import {getListCart} from '../_actions/cartActions';

import ShippingPaymentForm from '../components/form/shippingPaymentForm';
import ShippingMenu from '../components/menu/shippingMenu';
import ShippingStepMenu from '../components/menu/shippingStepMenu';
import variableConstants from '../_constants/variableConstants';
import {logPageView, initGA} from '../shared/utils/Analytics';

class shippingPaymentPage extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    const {history} = this.props;
    this.state = {
      shippingDetail: ''
    };
    let sessionId = localStorage.getItem(variableConstants.SessionId);
    // console.log(this.props);
    if (!sessionId) {
      history.push('/');
    }
  }
  componentWillMount() {
    const {history} = this.props;
    this.props.actions.getListCart(history);
    this.setState({
      shippingDetail: JSON.parse(localStorage.getItem('shippingDetail'))
    });
  }
  componentDidMount(){
    initGA();
    logPageView();
  }
  handleSubmit = values => {
    const {history} = this.props;
    const {listCart} = this.props.cartReducers;
    const shippingDetail = this.state.shippingDetail;

    // console.log("select payment");
    const paymentData = {};
    if (values.paymentType == 'BCA') {
      paymentData.type = 'BCA';
      paymentData.bankNumber = '221-900-274-7';
    } else {
      paymentData.type = 'MANDIRI';
      paymentData.bankNumber = ' 124-000-766-442-9';
    }
    // console.log(shippingDetail);
    this.props.actions.addShippingPayment(
      paymentData,
      listCart,
      shippingDetail,
      history
    );
  };

  render() {
    return (
      <div className="shipping-page bg-light full-100vh">
        <ShippingMenu />

        <ShippingStepMenu />
        <Components.contentWrapper contentName="shipping-content">
          <ShippingPaymentForm data={this.props} onSubmit={this.handleSubmit} />
        </Components.contentWrapper>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({addShippingPayment, getListCart}, dispatch)
  };
}

const mapStateToProps = state => {
  return {
    shippingReducers: state.shippingReducers,
    cartReducers: state.cartReducers
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(shippingPaymentPage)
);

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import * as Components from '../components';

import {getListCart, deleteItemCart} from '../_actions/cartActions';
import {processCheckOut} from '../_actions/shippingActions';
import ShippingMenu from '../components/menu/shippingMenu';
import ShippingStepMenu from '../components/menu/shippingStepMenu';
import variableConstants from '../_constants/variableConstants';
import {CurrencyFormatter} from '../_helpers/CurrencyFormatter';
import {logPageView, initGA} from '../shared/utils/Analytics';

class shippingReviewPage extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    const {history} = this.props;
    let sessionId = localStorage.getItem(variableConstants.SessionId);
    this.state = {
      shippingDetail: null,
      paymentData: null,
      shippingRate: null,
      sessionId
    };
    // console.log(this.props);
    if (!sessionId) {
      history.push('/');
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const {history} = this.props;
    const shippingDetail = JSON.parse(localStorage.getItem('shippingDetail'));
    const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    const shippingRate = JSON.parse(localStorage.getItem('shippingRate'));
    this.props.actions.getListCart(history);

    this.setState({
      shippingDetail: shippingDetail,
      paymentData: paymentData,
      shippingRate: shippingRate
    });
  }
  componentDidMount(){
    initGA();
    logPageView();
  }
  handleSubmit() {
    // console.log('submit checkout');
    const {history} = this.props;

    const checkOutPayload = {
      payment_method: 'transfer',
      payment_account_number: this.state.paymentData.bankNumber,
      payment_bank_name: this.state.paymentData.type,
      expedite_method: 'REG',
      expedite_name: 'JNE',
      expedite_fee: this.state.shippingRate.estimated_fee,
      customer_name: this.state.shippingDetail.name,
      customer_email: this.state.shippingDetail.email,
      customer_address: this.state.shippingDetail.address,
      customer_district: this.state.shippingDetail.districtName,
      customer_city: this.state.shippingDetail.cityName,
      customer_province: this.state.shippingDetail.provinceName,
      customer_postal_code: this.state.shippingDetail.postalCode || '0000',
      customer_phone: this.state.shippingDetail.phone
    };
    const sessionId = this.state.sessionId;
    // console.log(checkOutPayload);
    this.props.actions.processCheckOut(checkOutPayload, sessionId, history);
  }

  deleteItemCart(id, index) {
    const {history, listCart} = this.props;
    const dataToDelete = {
      id,
      index
    };
    let r = confirm('Yakin batal beli?');
    {
      r
        ? this.props.actions
            .deleteItemCart(dataToDelete, history, listCart)
            .then(() => {
              const carts = this.props.cartReducers.listCart;
              if (carts.length === 0) {
                history.go(-4);
              }
            })
        : null;
    }
  }

  render() {
    const {listCart} = this.props.cartReducers;
    const {estimated_fee, weight} = this.state.shippingRate;
    const paymentData = this.state.paymentData;
    const shippingDetail = this.state.shippingDetail;

    let totalan = 0;

    return (
      <div className="shipping-review-page bg-light ">
        <ShippingMenu />

        <ShippingStepMenu />
        <Components.contentWrapper contentName="shipping-content">
          <div className="review-section-list-item">
            <b>Total {listCart.length} Barang: </b>
            <div className="shipping-card ">
              {listCart.length > 0 ? (
                listCart.map((item, index) => {
                  totalan = totalan + item.display_price;
                  return (
                    <div className="cart-item border-bottom col-12" key={index}>
                      <div className="row">
                        <div className="col-3 padding-small cart-item-thumb">
                          <img
                            className="rounded"
                            src={item.primary_image.thumb_path}
                            alt={item.id}
                          />
                        </div>
                        <div className="col-7 padding-small">
                          <div className="cart-item-title">{item.name}</div>
                          <div className="cart-item-detail">
                            {item.size != null ? (
                              <span>
                                Size: {item.size.value},{` `}{' '}
                              </span>
                            ) : null}
                            {item.color != null ? (
                              <span>
                                Color: {item.color.value},{` `}
                              </span>
                            ) : null}
                            Qty: {item.qty}
                          </div>
                          <div className="cart-item-price color-gold">
                            {CurrencyFormatter(item.display_price, 'IDR')}
                          </div>
                        </div>
                        <div
                          className="col-2 cart-trash bg-light-grey"
                          style={{cursor: 'pointer'}}
                          onClick={() => this.deleteItemCart(item.id, index)}>
                          <div className="cart-trash-icon">
                            <i className="mdi mdi-delete mdi-24px" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h5>Data not found</h5>
              )}
            </div>
          </div>

          <div className="review-section-summary">
            <b>Ringkasan Belanja</b>
            <div className="shipping-card">
              <div className="shipping-card-body">
                <div className="shipping-review-detail">
                  <div className="detail-sub">
                    <span className="left">Sub Total</span>
                    <span className="right">
                      {CurrencyFormatter(totalan, 'IDR')}
                    </span>
                  </div>
                  <div className="detail-sub">
                    <span className="left">Berat</span>
                    <span className="right">{weight} kg</span>
                  </div>
                  <div className="detail-sub">
                    <span className="left">Ongkos Kirim</span>
                    <span className="right">
                      {CurrencyFormatter(estimated_fee, 'IDR')}
                    </span>
                  </div>
                  <div className="detail-sub">
                    <span className="left">Total Belanja</span>
                    <span className="right">
                      <b>{CurrencyFormatter(totalan + estimated_fee, 'IDR')}</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="review-section-shipping">
            <b>Pengiriman</b>
            <div className="shipping-card">
              <div className="shipping-card-body">
                <div className="review-shipping-detail">
                  <div className="review-detail">{shippingDetail.name}</div>
                  <div className="review-detail">{shippingDetail.phone}</div>
                  <div className="review-detail">{shippingDetail.email}</div>
                  <div className="review-detail">{shippingDetail.address}</div>
                  <div className="review-detail">
                    {shippingDetail.districtName}, {shippingDetail.cityName}
                  </div>
                  <div className="review-detail">
                    {shippingDetail.provinceName}
                  </div>
                  <div className="review-detail">
                    {shippingDetail.postalCode
                      ? ('-', shippingDetail.postalCode)
                      : ''}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="review-section-payment">
            <b>Metode Pembayaran</b>
            <div className="shipping-card">
              <div className="shipping-card-body">
                <div className="shipping-review-detail">
                  <div className="review-payment-title">TRANSFER BANK</div>
                  <div className="review-payment-hint">
                    {paymentData.type}
                    <br />
                    PT. Ebaba Muslim Indonesia <br />
                    <b>{paymentData.bankNumber}</b>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-success btn-block"
                  onClick={this.handleSubmit}>
                  Proses
                </button>
              </div>
            </div>
          </div>
        </Components.contentWrapper>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {getListCart, processCheckOut, deleteItemCart},
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
  connect(mapStateToProps, mapDispatchToProps)(shippingReviewPage)
);

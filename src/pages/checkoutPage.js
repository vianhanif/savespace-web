import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import moment from 'moment';
import html2canvas from 'html2canvas';

import 'moment/locale/id';

import {endTransaction} from '../_actions/shippingActions';
import variableConstants from '../_constants/variableConstants';

import MandiriLogo from '../static/img/Bank_Mandiri_logo.png';
import BCALogo from '../static/img/BCA_logo.png';

import styled from 'styled-components';
import {logPageView, initGA} from '../shared/utils/Analytics';

const CheckoutWeekendTitle = styled.div`
  font-family: 'Roboto';
  font-size: 14px;
  font-style: italic;
  color: #5a6872;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const CheckoutWeekendDesc = styled.div`
  padding: 24px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #5a6872
  background-color: #f5f7fa;
`;

class checkoutPage extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    const {history} = this.props;
    let sessionId = localStorage.getItem(variableConstants.SessionId);
    this.state = {
      expiredAt: null,
      orderNumber: null,
      totalTransfer: null,
      bankType: null,
      bankNumber: null,
      totalSuffix: null,
      totalPrefix: null
    };
    if (!sessionId) {
      history.push('/');
    }

    this.endTransaction = this.endTransaction.bind(this);
    // console.log(this.props.shippingReducers);
  }

  componentWillMount() {
    const {history} = this.props;
    const shippingDetail = JSON.parse(localStorage.getItem('shippingDetail'));
    const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    const shippingRate = JSON.parse(localStorage.getItem('shippingRate'));
    const checkout = JSON.parse(localStorage.getItem('checkout'));

    let nf = Intl.NumberFormat();
    if (checkout != null) {
      // splitting total transfer into prefix and suffix to make unique number being on red box
      let totalString = Math.floor(checkout.total_transfer_unique).toString();
      let totalSuffix = totalString.substr(totalString.length - 3);
      let totalPrefix = totalString.substr(0, totalString.length - 3);

      this.setState({
        expiredAt: moment(checkout.expired_at).format('LLLL'),
        orderNumber: checkout.order_number,
        totalTransfer: nf.format(checkout.total_transfer_unique),
        bankType: paymentData.type,
        bankNumber: paymentData.bankNumber,
        totalSuffix: totalSuffix,
        totalPrefix: this.currencyFormatter(totalPrefix, 'IDR'),
        isWeekend:
          moment(checkout.expired_at).weekday() == 5 ||
          moment(checkout.expired_at).weekday() == 6
      });
    } else {
      history.push('/');
    }
  }
  componentDidMount(){
    initGA();
    logPageView();
  }
  currencyFormatter(value, currency, floating) {
    let formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: floating
    });

    return formatter.format(value);
  }

  endTransaction() {
    const {history} = this.props;
    const checkout = JSON.parse(localStorage.getItem('checkout'));

    html2canvas(document.getElementById('printable-checkout'))
      .then(canvas => {
        let a = document.createElement('a');
        a.download = `${'ebaba-' + checkout.order_number + '.png'}`;
        a.target = '_blank';
        a.href = canvas
          .toDataURL('image/png')
          .replace(
            /^data:image\/[^;]*/,
            'data:application/octet-stream'
          ) /* Change MIME type to trick the browser to downlaod the file instead of displaying it */
          .replace(
            /^data:application\/octet-stream/,
            'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=ebaba-' +
              checkout.order_number +
              '.png'
          );
        document.body.appendChild(a);

        a.click();
        // Cleanup the DOM
        document.body.removeChild(a);
      })
      .then(() => {
        this.props.actions.endTransaction(history);
      });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="checkout-page">
        <div className="checkout-menu bg-light border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-xs-12">
                <div className="row">
                  <div className="checkout-map">
                    <div className="col-12 align-center">
                      <b>CHECKOUT</b>
                      <Link to={`/`}>
                        <div className="checkout-icon-exit">
                          <i className="mdi mdi-close mdi-24px" />
                        </div>
                      </Link>

                      <div
                        className="checkout-icon-download"
                        onClick={this.endTransaction}>
                        <i className="mdi mdi-download mdi-24px" />
                      </div>
                      <div className="checkout-icon-share-variant">
                        <i className="mdi mdi-share-variant mdi-24px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-content full">
          <div className="container">
            <div className="row">
              <div
                id="printable-checkout"
                className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 bg-light">
                <div className="checkout-header">
                  <div className="checkout-title">CHECKOUT BERHASIL</div>
                  <div className="checkout-help-title">
                    Pesanan Anda telah diterima dengan baik. Berikut informasi
                    pembayaran order kamu.
                  </div>
                </div>
                <div className="checkout-body">
                  <div className="checkout-orderid-total">
                    <div className="checkout-orderid-total-title">
                      <span className="checkout-orderid-title">Order Id</span>
                      <span className="checkout-total-title">Total</span>
                    </div>
                    <div className="checkout-orderid-total-data">
                      <span className="checkout-orderid-data">
                        #{this.state.orderNumber}
                      </span>
                      <span className="checkout-total-data">
                        {this.state.totalPrefix}.<span style={{color: 'red'}}>
                          {this.state.totalSuffix}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="checkout-help-digit">
                    <div className="checkout-help-digit-data">
                      Mohon transfer hingga{' '}
                      <span style={{fontWeight: '500'}}>3 digit terkahir</span>{` `}
                      untuk mempercepat proses verifikasi
                    </div>
                  </div>

                  <div className="checkout-isweekend">
                    {this.state.isWeekend ? (
                      <div className="checkout-weekend">
                        <CheckoutWeekendTitle>
                          Pemesanan Akhir Minggu
                        </CheckoutWeekendTitle>
                        <CheckoutWeekendDesc>
                          Pesanan kamu akan diproses dihari kerja berikutnya
                          (Senin-Jumat)
                        </CheckoutWeekendDesc>
                      </div>
                    ) : null}
                  </div>

                  <div className="checkout-payment-deadline">
                    <div className="checkout-payment-deadline-title">
                      Batas Waktu Pembayaran
                    </div>
                    <div className="checkout-payment-deadline-data">
                      {this.state.expiredAt} WIB (1 x 10jam)
                    </div>
                  </div>

                  <div className="checkout-payment-method">
                    <div className="checkout-payment-method-title">
                      Metode Pembayaran
                    </div>
                    <div className="checkout-payment-method-help">
                      Pembayaran dapat dilakukan ke rekening berikut melalui ATM
                      atau transfer bank
                    </div>
                    <div className="checkout-payment-method-detail">
                      {this.state.bankType == 'MANDIRI' ? (
                        <div className="row">
                          <div className="col-5 margin-middle align-center">
                            <img
                              src={MandiriLogo}
                              className="img-fluid"
                              alt="mandiri-logo"
                              style={{width: '100px'}}
                            />
                          </div>
                          <div className="col-7">
                            <div className="checkout-transfer-name">
                              <b>PT. Ebaba Muslim Indonesia </b>
                            </div>
                            <div className="checkout-transfer-bank">
                              <b>{this.state.bankType} </b>
                            </div>
                            <div className="checkout-transfer-banknumber">
                              {this.state.bankNumber}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-5 margin-middle align-center">
                            <img
                              src={BCALogo}
                              className="img-fluid"
                              alt="bca-logo"
                              style={{width: '100px'}}
                            />
                          </div>
                          <div className="col-7">
                            <div className="checkout-transfer-name">
                              <b>PT. Ebaba Muslim Indonesia </b>
                            </div>
                            <div className="checkout-transfer-bank">
                              <b>{this.state.bankType} </b>
                            </div>
                            <div className="checkout-transfer-banknumber">
                              {this.state.bankNumber}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="checkout-payment-thanks">
                      Terima kasih telah berbelanja di eBaba, InsyaAllah Berkah.
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
    actions: bindActionCreators({endTransaction}, dispatch)
  };
}

const mapStateToProps = state => {
  return {
    shippingReducers: state.shippingReducers,
    cartReducers: state.cartReducers
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(checkoutPage)
);

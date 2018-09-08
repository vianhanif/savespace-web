import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import {getListCart, deleteItemCart} from '../_actions/cartActions';
import variableConstants from '../_constants/variableConstants';
import {CurrencyFormatter} from '../_helpers/CurrencyFormatter';
import {logPageView, initGA} from '../shared/utils/Analytics';

import * as Components from '../components';

class cartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIDWillDelete: '',
      itemIndexWillDelete: ''
    };
    window.scrollTo(0, 0);
    this.deleteItemCart = this.deleteItemCart.bind(this);
  }

  componentWillMount() {
    const {history} = this.props;
    this.props.actions.getListCart(history);
  }

  componentDidMount() {
    initGA();
    logPageView();
  }

  componentWillReceiveProps(nextProps) {
    const {listCart} = nextProps;
    if (listCart.length == 0) {
      localStorage.removeItem('SessionId');
    }
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
        ? this.props.actions.deleteItemCart(dataToDelete, history, listCart)
        : null;
    }
  }

  render() {
    let nf = Intl.NumberFormat();
    const {listCart, countCart} = this.props;
    let totalan = 0;
    
    return (
      <div className="cart-page">
        <Components.topMenu>
          <Components.pageMenu>Keranjang Belanja</Components.pageMenu>
        </Components.topMenu>

        <Components.contentWrapper
          contentName="cart-content"
          padding="bg-light">
          {this.props.isFetched ? (
            listCart.length === 0 ? (
              <div className="padding-small align-center">
                Keranjang anda masih kosong
              </div>
            ) : (
              listCart.map((item, index) => {
                totalan = totalan + item.display_price;
                return (
                  <div className="cart-item" key={index}>
                    <div className="row border-bottom">
                      <div className="col-3 padding-xsmall cart-item-thumb">
                        <Link to={`/detail/${item.product_id}`}>
                          {item.primary_image === null ? (
                            <img
                              className="rounded img-fluid"
                              src="https://i.pinimg.com/originals/88/2a/f9/882af9c0182e042783837a9deb7c4c35.jpg"
                              alt={item.id}
                            />
                          ) : (
                            <img
                              className="rounded img-fluid"
                              src={item.primary_image.thumb_path}
                              alt={item.id}
                            />
                          )}
                        </Link>
                      </div>
                      <div className="col-7 padding-xsmall">
                        <Link to={`/detail/${item.product_id}`}>
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
                        </Link>
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
            )
          ) : (
            <Components.Loader withWrapper />
          )}
        </Components.contentWrapper>

        <div
          className="bottom-menu-cart bg-light fixed-bottom"
          style={{
            padding: '1rem 0',
            textAlign: 'left',
            boxShadow: '0 5px 5px 5px rgba(0, 0, 0, 0.2)'
          }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-xs-12">
                {listCart.length > 0 ? (
                  <div className="row no-gutters">
                    <div className="col-7 col-sm-6">
                      <div className="cart-total-item">
                        Total{' '}
                        {countCart.length > 0 ? (
                          <span>{countCart.length}</span>
                        ) : null}{' '}
                        barang (sebelum ongkir)
                      </div>
                      <div className="cart-total-price color-gold">
                        {CurrencyFormatter(totalan, 'IDR')}
                      </div>
                    </div>
                    <div className="col-5 col-sm-6">
                      <Link to="/shipping">
                        <button
                          type="button"
                          className="btn btn-success btn-md btn-block cart-button">
                          Lanjut ke Kasir
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-md btn-block cart-button">
                      Kembali ke beranda
                    </button>
                  </Link>
                )}
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
    actions: bindActionCreators({getListCart, deleteItemCart}, dispatch)
  };
}

const mapStateToProps = ({cartReducers}) => {
  return cartReducers;
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(cartPage)
);

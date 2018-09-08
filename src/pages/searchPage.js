import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {saveLastSearch} from '../_actions/searchActions';
import {
  getAllProducts,
  resetListProducts,
  searchProducts
} from '../_actions/homeActions';
import BottomScrollListener from 'react-bottom-scroll-listener';
import SearchForm from '../components/form/searchForm';

import {CurrencyFormatter} from '../_helpers/CurrencyFormatter';

import PropTypes from 'prop-types';
import * as Components from '../components';
import {logPageView, initGA} from '../shared/utils/Analytics';

class searchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      search: '',
      page: 1,
      per_page: 10,
      lastSearch: [],
      scrollLoader: false
    };
    this.searchOnChange = this.searchOnChange.bind(this);
  }
  componentWillMount() {
    let {search, page, per_page} = this.state;
    this.props.actions.searchProducts(search, {page, per_page}).then(() => {
      this.setState({loading: false});
    });
    this.setState({
      lastSearch:
        localStorage.getItem('lastSearch') !== null
          ? JSON.parse(localStorage.getItem('lastSearch'))
          : []
    });
  }
  componentDidMount(){
    initGA();
    logPageView();
  }
  searchOnChange(e, scroll = false) {
    let searchQuery = e.target.value.toLowerCase();
    let {page, per_page} = this.state;
    page = searchQuery === this.state.search ? page + 1 : 1;
    this.setState({search: e.target.value.toLowerCase()});
    this.setState({page});
    if (scroll) {
      this.setState({scrollLoader: true});
    } else {
      this.setState({loading: true});
    }
    if (page === 1) {
      this.props.actions.resetListProducts();
    }
    this.props.actions
      .searchProducts(searchQuery, {page, per_page})
      .then(() => {
        if (scroll) {
          this.setState({scrollLoader: false});
        } else {
          this.setState({loading: false});
        }
      });
  }
  checkTotalLastSearch() {
    return this.state.lastSearch.length < 5;
  }
  searchResultClick(product) {
    this.checkTotalLastSearch()
      ? localStorage.getItem('lastSearch') !== null
        ? localStorage.setItem(
            'lastSearch',
            JSON.stringify(
              _.uniq([
                ...JSON.parse(localStorage.getItem('lastSearch')),
                {
                  name: product.name,
                  id: product.id
                }
              ])
            )
          )
        : localStorage.setItem(
            'lastSearch',
            JSON.stringify([
              ...[],
              {
                name: product.name,
                id: product.id
              }
            ])
          )
      : localStorage.setItem(
          'lastSearch',
          JSON.stringify(
            _.uniq([
              ..._.takeRight(JSON.parse(localStorage.getItem('lastSearch')), 5),

              {
                name: product.name,
                id: product.id
              }
            ])
          )
        );
  }

  handleScroll = () => {
    if (this.state.search !== '') {
      this.searchOnChange(
        {
          target: {
            value: this.state.search
          }
        },
        true
      );
    }
  };

  render() {
    let {searchedProducts} = this.props.homeReducers;

    // format price into local currency format
    searchedProducts = searchedProducts ? searchedProducts : [];
    let nf = Intl.NumberFormat();

    return (
      <div className="search-page">
        <Components.topMenu>
          <Components.pageMenu>
            <SearchForm onChange={this.searchOnChange} />
          </Components.pageMenu>
        </Components.topMenu>
        {this.state.loading ? (
          <Components.Loader loading={this.state.loading} />
        ) : (
          <Components.contentWrapper
            contentName="page-content"
            padding="full bg-light no-padding">
            <BottomScrollListener onBottom={this.handleScroll} debounce={1500}>
              {this.state.search.length === 0 ? (
                <div>
                  {this.state.lastSearch.length !== 0 && (
                    <div className="last-search padding-xsmall">
                      <div className="primary-title">Pencarian Terakhir</div>
                      <ul className="list-last-search list-non-style list-font-style">
                        {this.state.lastSearch.map(val => (
                          <li key={val.id}>
                            <Link to={`/detail/${val.id}`}>{val.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="list-recomended-produk padding-xsmall">
                    <div className="primary-title">Produk Pilihan</div>
                    {searchedProducts &&
                      searchedProducts
                        .slice(0, 4)
                        .map((recomendedProduct, index) => {
                          const clickSearchEvent = () =>
                            this.searchResultClick(recomendedProduct);
                          if (recomendedProduct.vendor_point) {
                            return (
                              <Link
                                  to={'/seller/' + recomendedProduct.name}
                                  key={index}
                                  onClick={clickSearchEvent}>
                                <div className="cart-item cart-point">
                                    <div className="row border-top border-bottom">
                                      <div className="col-3 padding-small cart-item-thumb">
                                        <img
                                          className="rounded"
                                          src={
                                            recomendedProduct.image_thumb_path
                                          }
                                          alt={recomendedProduct.image_thumb_path}
                                        />
                                      </div>
                                      <div className="col-7 padding-small">
                                        <div className="cart-item-title color-gold">
                                          {recomendedProduct.name}
                                        </div>
                                        {recomendedProduct.caption && (
                                          <div className="cart-item-caption">
                                          {recomendedProduct.caption.split(' ').slice(0, 9).join(' ')}{recomendedProduct.caption.split(' ').length > 9 ? '...' : ''}
                                          </div>
                                        )}
                                        <div className="cart-item-sub-caption">
                                          {recomendedProduct.city ? `${recomendedProduct.address}, ` : recomendedProduct.address} {recomendedProduct.city || ''} {recomendedProduct.province ? `, ${recomendedProduct.province}` : ''}
                                        </div>
                                        <div />
                                      </div>
                                      <div className="col-2 cart-trash bg-light-grey">
                                        <div className="cart-trash-icon">
                                          <i className="mdi mdi-chevron-right mdi-36px" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </Link>
                            )
                          } else {
                            if (recomendedProduct.primary_image != null) {
                              return (
                                <Link
                                  to={'/detail/' + recomendedProduct.id}
                                  key={index}
                                  onClick={clickSearchEvent}>
                                  <div className="cart-item">
                                    <div className="row border-top border-bottom">
                                      <div className="col-3 padding-small cart-item-thumb">
                                        <img
                                          className="rounded"
                                          src={
                                            recomendedProduct.primary_image
                                              .thumb_path
                                          }
                                          alt={recomendedProduct.primary_image.id}
                                        />
                                      </div>
                                      <div className="col-7 padding-small">
                                        <div className="cart-item-title">
                                          {recomendedProduct.name}
                                        </div>
                                        <div className="cart-item-price color-gold">
                                          {CurrencyFormatter(
                                            recomendedProduct.display_price,
                                            'IDR'
                                          )}
                                        </div>
                                        <div />
                                      </div>
                                      <div className="col-2 cart-trash bg-light-grey">
                                        <div className="cart-trash-icon">
                                          <i className="mdi mdi-chevron-right mdi-36px" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              );
                            }
                          }
                        })}
                  </div>
                </div>
              ) : (
                <h5>
                  <Components.ScrollLoader load={this.state.scrollLoader} />
                  {searchedProducts.length > 0 ? (
                    searchedProducts.map((product, index) => {
                      if (product.vendor_point) {
                        return (
                          <Link
                                  to={'/seller/' + product.name}
                                  key={index}
                                  onClick={() => this.searchResultClick(product)}>
                            <div className="cart-item cart-point">
                                <div className="row border-top border-bottom">
                                  <div className="col-3 padding-small cart-item-thumb">
                                    <img
                                      className="rounded"
                                      src={
                                        product.image_thumb_path
                                      }
                                      alt={product.image_thumb_path}
                                    />
                                  </div>
                                  <div className="col-7 padding-small">
                                    <div className="cart-item-title color-gold">
                                      {product.name}
                                    </div>
                                    {product.caption && (
                                          <div className="cart-item-caption">
                                          {product.caption.split(' ').slice(0, 9).join(' ')}{product.caption.split(' ').length > 9 ? '...' : ''}
                                          </div>
                                    )}
                                    <div className="cart-item-sub-caption">
                                      {product.city ? `${product.address}, ` : product.address} {product.city || ''} {product.province ? `, ${product.province}` : ''}
                                    </div>
                                    <div />
                                  </div>
                                  <div className="col-2 cart-trash bg-light-grey">
                                    <div className="cart-trash-icon">
                                      <i className="mdi mdi-chevron-right mdi-36px" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </Link>
                        )
                      } else {
                        if (product.primary_image != null) {
                          return (
                            <Link to={'/detail/' + product.id} key={index}>
                              <div
                                className="cart-item"
                                onClick={() => this.searchResultClick(product)}>
                                <div className="row border-bottom">
                                  <div className="col-3 padding-small cart-item-thumb">
                                    <img
                                      className="rounded"
                                      src={product.primary_image.thumb_path}
                                      alt={product.primary_image.id}
                                    />
                                  </div>
                                  <div className="col-7 padding-small">
                                    <div className="cart-item-title">
                                      {product.name}
                                    </div>
                                    <div className="cart-item-price color-gold">
                                      {CurrencyFormatter(
                                        product.display_price,
                                        'IDR'
                                      )}
                                    </div>
                                    <div />
                                  </div>
                                  <div className="col-2 cart-trash bg-light-grey">
                                    <div className="cart-trash-icon">
                                      <i className="mdi mdi-chevron-right mdi-36px" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        }
                      }
                    })
                  ) : (
                    <div className="search-notfound align-center">
                      <h3>Not Found</h3>
                    </div>
                  )}
                </h5>
              )}
            </BottomScrollListener>
          </Components.contentWrapper>
        )}
        <Components.bottomMenu />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {saveLastSearch, getAllProducts, resetListProducts, searchProducts},
      dispatch
    )
  };
}

const mapStateToProps = state => {
  return {
    homeReducers: state.homeReducers,
    SearchReducers: state.SearchReducers
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(searchPage)
);

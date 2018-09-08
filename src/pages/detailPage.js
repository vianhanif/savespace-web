import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import * as Components from '../components';
import ProductDetail from '../components/ProductDetail';
import BottomScrollListener from 'react-bottom-scroll-listener';
import {getDetailProduct} from '../_actions/detailActions';
import {addItemToCart} from '../_actions/cartActions';
import {
  getProductsByCategory,
  resetListProducts
} from '../_actions/homeActions';
import homeConstants from '../_constants/homeConstants';
import {logPageView, initGA} from '../shared/utils/Analytics';

class DetailPage extends Component {
  state = {
    allProducts: [],
    productId: '',
    selectedSize: '',
    selectedColor: '',
    loading: true,
    page: 1,
    per_page: 20,
    scrollLoader: false
  };

  componentWillMount() {
    // get product id
    this.props.actions.resetListProducts();
    const {match} = this.props;
    console.log(this.props)
    const id = match.params.id;
    this.setState({productId: id});
    this.props.actions.getDetailProduct(id, this.props.history).then(
      setTimeout(() => {
        let list = [];
        this.setState({allProducts: list});
        const product = this.props.detailReducers.product;
        product.category.forEach((category, index) => {
          let {page, per_page} = this.state;
          this.props.actions
            .getProductsByCategory(category.name, {page, per_page})
            .then(() => {
              // get detail assets
              this.props.homeReducers.filteredProducts.forEach(item => {
                if (item.id !== id) {
                  list.push(item);
                }
              });
              const sizes = this.props.detailReducers.product.size;
              const colors = this.props.detailReducers.product.color;
              this.setState({product_id: id});
              this.setState({allProducts: list});
              this.setState({
                selectedSize: sizes.length > 0 ? sizes[0].id : ''
              });
              this.setState({
                selectedColor: colors.length > 0 ? colors[0].id : ''
              });
              if (index === product.category.length - 1) {
                this.setState({loading: false});
              }
            });
        });
      }, 1000)
    );
  }

  componentDidMount(){
    initGA();
    logPageView();
  }

  componentWillReceiveProps(newProps) {
    const newId = newProps.match.params.id;
    if (this.props.detailReducers.product.id !== newId) {
      this.setState({loading: true});
      this.props.actions.getDetailProduct(newId, this.props.history).then(
        setTimeout(() => {
          let list = [];
          this.setState({allProducts: list});
          const product = this.props.detailReducers.product;
          this.props.actions.resetListProducts();
          product.category.forEach((category, index) => {
            let {page, per_page} = this.state;
            this.props.actions
              .getProductsByCategory(category.name, {page, per_page})
              .then(() => {
                // get detail assets
                this.props.homeReducers.filteredProducts.forEach(item => {
                  if (item.id !== newId) {
                    list.push(item);
                  }
                });
                const sizes = this.props.detailReducers.product.size;
                const colors = this.props.detailReducers.product.color;
                this.setState({product_id: newId});
                this.setState({allProducts: list});
                this.setState({
                  selectedSize: sizes.length > 0 ? sizes[0].id : ''
                });
                this.setState({
                  selectedColor: colors.length > 0 ? colors[0].id : ''
                });
                if (index === product.category.length - 1) {
                  this.setState({loading: false});
                }
              });
          });
        }, 1000)
      );
      window.scrollTo(0, 0);
    }
  }

  handleSizeChange = e => {
    e.preventDefault();
    this.setState({selectedSize: e.target.id});
  };
  handleColorChange = e => {
    e.preventDefault();
    this.setState({selectedColor: e.target.id});
  };

  handleSubmit = () => {
    const {history} = this.props;
    const productData = {
      product_id: this.props.detailReducers.product.id,
      qty: 1,
    size_id: this.state.selectedSize,
      color_id: this.state.selectedColor
    };
    // fire actions to add item to cart state
    this.props.actions.addItemToCart(productData, history);
  };

  handleScroll = () => {
    const product = this.props.detailReducers.product;
    let {page, per_page, category} = this.state;
    this.setState({page: page + 1});
    this.setState({scrollLoader: true});
    product.category.forEach((category, index) => {
      this.props.actions
        .getProductsByCategory(category.name, {page: page + 1, per_page})
        .then(() => {
          let list = [];
          if (index === product.category.length - 1) {
            this.props.homeReducers.filteredProducts.forEach(item => {
              if (item.id !== product.id) {
                list.push(item);
              }
            });
            this.setState({allProducts: list});
            this.setState({scrollLoader: false});
          }
        });
    });
  };

  render() {
    let nf = Intl.NumberFormat();
    const {detailFetched, product} = this.props.detailReducers;
    const pageId = window.location.pathname.replace('/detail/', '');
    return (
      <div className="detail-page">
        {detailFetched && product.id === pageId && !this.state.loading ? (
          <BottomScrollListener onBottom={this.handleScroll} offset={1000}>
            <Components.topMenu>
              <Components.pageMenu>Detail Produk</Components.pageMenu>
            </Components.topMenu>
            <Components.contentWrapper
              contentName="detail-content"
              padding="no-padding">
              <ProductDetail
                product={this.props.detailReducers.product}
                addToCart={this.handleSubmit}
                selectedSize={this.state.selectedSize}
                selectedColor={this.state.selectedColor}
                handleColorChange={this.handleColorChange}
                handleSizeChange={this.handleSizeChange}
              />
            </Components.contentWrapper>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12s">
                  <b>Produk Lainya</b>
                  <Components.ScrollLoader load={this.state.scrollLoader} />
                  <Components.Card products={this.state.allProducts} />
                </div>
              </div>
              <Components.bottomMenu />
            </div>
          </BottomScrollListener>
        ) : (
          <Components.Loader />
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getDetailProduct,
        addItemToCart,
        getProductsByCategory,
        resetListProducts
      },
      dispatch
    )
  };
}

const mapStateToProps = state => {
  return {
    homeReducers: state.homeReducers,
    detailReducers: state.detailReducers,
    cartReducers: state.cartReducers
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DetailPage)
);

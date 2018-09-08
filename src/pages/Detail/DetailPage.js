import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {DetailContainer, FixedTop} from './DetailStyled';
import {getDetailProduct} from '../../_actions/detailActions';
import PageMenu from '../../components/pageMenu';
import Loader from '../../components/Loader';
import DetailPageContent from './DetailPageContent';
import {addItemToCart} from '../../_actions/cartActions';
import BottomMenu from '../../components/bottomMenu';
import CardList from '../../components/Card/CardList';
import {getProductsByCategory, fetching} from '../../_actions/homeActions';
import ScrollLoader from '../../components/ScrollLoader';
import history from '../../routers/history';
import {Container, GUTTER_TYPE} from '../Layout/LayoutStyled';
import {logPageView, initGA} from '../../shared/utils/Analytics';

class DetailPage extends Component {
  state = {
    product: {},
    isLoading: true,
    message: '',
    data: {
      qty: 1,
      size_id: '',
      color_id: ''
    },
    isSubmitting: false,
    scrollLoader: false,
    page: 1,
    scrollFetch: false
  };

  componentWillMount() {
    const {location} = this.props;
    const {state: historyState} = location;
    if (historyState && historyState.product) {
      historyState.product.category.forEach(category => {
        this.fetchCategory(category.name, {page: 1, per_page: 20});
      });
      return this.setState({
        product: historyState.product,
        isLoading: false,
        category: historyState.product.category,
        data: {
          ...this.state.data,
          color_id: historyState.product.color[0]
            ? historyState.product.color[0].id
            : '',
          size_id: historyState.product.size[0]
            ? historyState.product.size[0].id
            : ''
        }
      });
    }
    this.fetchData(this.props.match.params.id);
  }
  componentDidMount() {
    initGA();
    logPageView();
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.state.product.id) {
      // this.setState({isLoading: true});
      this.fetchData(nextProps.match.params.id).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  fetchData = id => {
    return this.props.onFetchProductDetail(id).then(() => {
      if (window) {
        window.scrollTo(0, 0);
      }
      this.setState({
        categories: this.props.product.category
      });
      this.props.product.category &&
        this.props.product.category.forEach(category => {
          this.fetchCategory(category.name, {
            page: this.state.page,
            per_page: 20
          });
        });
      return this.setState(prevState => ({
        isLoading: false,
        product: this.props.product,
        data: {
          ...this.state.data,
          color_id: this.props.product.color[0]
            ? this.props.product.color[0].id
            : '',
          size_id: this.props.product.size[0]
            ? this.props.product.size[0].id
            : ''
        }
      }));
    });
  };
  fetchCategory = (category, query) => {
    return this.props.onFetchProductByCategory(
      category,
      {...query, id: this.props.match.params.id},
      'relatedProduct',
    );
  };
  handleSizeChange = e => {
    e.preventDefault();
    if (e.target === null) {
      return false;
    }
    return this.setState({
      data: {
        ...this.state.data,
        size_id: e.target.id
      }
    });
  };
  handleColorChange = e => {
    e.preventDefault();
    if (e.target === null) {
      return false;
    }
    return this.setState({
      data: {
        ...this.state.data,
        color_id: e.target.id
      }
    });
  };

  handleAddToCart = () => {
    this.setState(prevState => ({
      isSubmitting: !prevState.isSubmitting
    }));
    let data = {
      ...this.state.data,
      product_id: this.props.match.params.id
    };

    this.props.onAddToCart(data).then(() =>
      setTimeout(() => {
        this.setState(prevState => ({
          isSubmitting: !prevState.isSubmitting
        }));
      }, 2000)
    );
  };

  onProductChosen = id => {
    const product = this.props.relatedProduct.filter(product => {
      return product.id === id;
    })[0];
    history.push(`/detail/${id}`, {
      fromDetailPage: true,
      product
    });
    return this.setState(prevState => ({
      isDetailActive: !prevState.isDetailActive
    }));
  };

  handleScroll = () => {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (
      windowBottom >= docHeight &&
      !this.state.isLoading &&
      this.props.fetched
    ) {
      if (!this.state.scrollFetch) {
        this.setState({
          scrollLoader: true,
          scrolFetch: true
        });
        this.state.category &&
          this.state.category.forEach(category => {
            this.fetchCategory(
              category.name,
              {
                page: this.state.page + 1,
                per_page: 20
              },
              'relatedProduct'
            ).then(() => {
              return this.setState(prevState => ({
                page: prevState.page + 1,
                scrollLoader: false,
                scrollFetch: false
              }));
            });
          });
      }
    }
  };
  render() {
    const detailPageProps = {
      product: this.state.product,
      handleColorChange: this.handleColorChange,
      handleSizeChange: this.handleSizeChange,
      handleAddToCart: this.handleAddToCart,
      isSubmitting: this.state.isSubmitting
    };
    return (
      <DetailContainer>
        <FixedTop>
          <PageMenu>Detail Produk</PageMenu>
        </FixedTop>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <DetailPageContent {...detailPageProps} />
        )}
        {this.props.fetched &&
          !this.state.isLoading && (
            <Container gutter={GUTTER_TYPE.NONE}>
              <h5>Produk Lainnya</h5>
              <CardList
                products={this.props.relatedProduct}
                onProductChosen={this.onProductChosen}
              />
              <BottomMenu />
            </Container>
          )}
        <ScrollLoader load={this.state.scrollLoader} />
      </DetailContainer>
    );
  }
}

const mapStateToProps = state => ({
  product: state.detailReducers.product,
  products: state.homeReducers.products,
  relatedProduct: state.homeReducers.relatedProduct,
  fetched: state.homeReducers.fetched
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetching: () => dispatch(fetching()),
  onFetchProductDetail: query => dispatch(getDetailProduct(query)),
  onAddToCart: query => dispatch(addItemToCart(query)),
  onFetchProductByCategory: (category, query, state) =>
    dispatch(getProductsByCategory(category, query, state))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);

import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {SORT_VALUES} from '../_constants/sortConstants';

import {
  getSortedProducts,
  fetching,
  getProducts,
  getHeadlines
} from '../_actions/homeActions';

import Layout, {Container} from './Layout/Layout';
import CardList from '../components/Card';
import ScrollLoader from '../components/ScrollLoader';
import Loader from '../components/Loader';
import Subsidiaries from '../components/category/subsidiaries';
import HomeSlider from '../components/Slider/HomeSlider';
import CategoryStories from '../components/category/CategoryStories';
import BottomMenu from '../components/bottomMenu';
import {GUTTER_TYPE} from './Layout/LayoutStyled';
import history from '../routers/history';

import {logPageView, initGA} from '../shared/utils/Analytics';

class HomePage extends Component {
  state = {
    allProducts: '',
    sortActive: false,
    currentPage: 1,
    scrollLoader: false,
    fetchingPagination: false,
    sortKey: 'date_created',
    isDetailActive: false
  };

  componentWillMount() {
    this.props
    .getHeadlines()
    .then(res => {
      this.props
      .getProducts({
        sortKey: this.state.sortKey,
        page: 1,
        per_page: 20
      })
      .then(res => {
        return this.setState({
          currentPage: 1
        });
      });
    })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('keydown', this.escModalListener, false);
    initGA();
    logPageView();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('keydown', this.escModalListener, false);
  }
  handleScroll = prevState => {
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

    if (windowBottom >= docHeight - 500) {
      // showing scroll loader based on reducer isFetchPagination value
      this.setState(prevState => ({
        scrollLoader: this.props.scrollFetch
      }));

      // prevent multiple dispatch when isFetchPagination is tru
      !this.props.scrollFetch &&
        this.props
          .getProducts({
            page: this.state.currentPage + 1,
            per_page: 20,
            sortKey: 'date_created'
          })
          .then(() => {
            return this.setState(prevState => ({
              currentPage: prevState.currentPage + 1,
              scrollLoader: this.props.scrollFetch
            }));
          });
    }
  };

  clickToSort = e => {
    this.props.fetching();
    this.setState({sortActive: false, currentPage: 1, sortKey: e.target.value});
    return this.props.getSortedProducts(e.target.value);
  };

  toggleSort = () =>
    this.setState(prevState => ({sortActive: !prevState.sortActive}));

  escModalListener = event => {
    if (event.keyCode === 27) {
      this.state.sortActive && this.dismissSort();
    }
  };
  onProductChosen = item => {
    const isProduct = Object.keys(item).includes('sku')
    const isVendorPoint = item.vendor_point
    if (isProduct) {
      history.push(`/detail/${item.id}`, {
        isScrollToTop: true,
        product: item
      });
      return this.setState(prevState => ({
        isDetailActive: !prevState.isDetailActive
      }));
    } else if (!isProduct && !isVendorPoint) {
      window.location.href = item.link
    } else if (!isProduct && isVendorPoint) {
      // todo action highlighted vendor
    }
  };
  render() {
    const layoutProps = {
      type: 1,
      headerProps: {
        sortActive: this.state.sortActive,
        activateSort: this.toggleSort,
        clickToSort: this.clickToSort,
        dismissModal: this.toggleSort,
        compact: this.props.sortBy !== '',
        sortName:
          this.props.sortBy === ''
            ? 'Urutkan'
            : SORT_VALUES[this.props.sortBy.toUpperCase()].label
      }
    };
    if (!this.props.fetched) {
      return <Loader />;
    }
    return (
      <Layout {...layoutProps}>
        <Container gutter={GUTTER_TYPE.TOP}>
          {this.props.sortBy === '' ? (
            <Fragment>
              <Subsidiaries />
              <HomeSlider list={this.props.headlines} />
              <CategoryStories />
            </Fragment>
          ) : (
            <CategoryStories withLink />
          )}
        </Container>
        <Container gutter={GUTTER_TYPE.BOTTOM}>
          <CardList
            products={this.props.products}
            onProductChosen={this.onProductChosen}
          />
          <ScrollLoader load={this.state.scrollLoader} />
        </Container>
        <BottomMenu />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetching: () => dispatch(fetching()),
  getProducts: query => dispatch(getProducts(query)),
  getHeadlines: () => dispatch(getHeadlines()),
  getSortedProducts: query => dispatch(getSortedProducts(query))
});
const mapStateToProps = state => ({
  sortBy: state.homeReducers.sortBy,
  products: state.homeReducers.products,
  headlines: state.homeReducers.headlines,
  fetched: state.homeReducers.fetched,
  scrollFetch: state.homeReducers.isFetchPagination
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

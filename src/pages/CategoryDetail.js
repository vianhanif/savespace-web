import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getListCategory} from '../_actions/categoryActions';
import {
  getProductsByCategory,
  resetListProducts
} from '../_actions/homeActions';
import * as Components from '../components';
import ImgCategory from '../static/img/hijab-category.png';
import BottomScrollListener from 'react-bottom-scroll-listener';
import {logPageView, initGA} from '../shared/utils/Analytics';
import styled from 'styled-components';

const GridWrapper = styled.div`
  margin-bottom: 20px;
`;
class CategoryDetail extends Component {
  state = {
    category: '',
    loading: true,
    scrollLoader: false,
    page: 1,
    per_page: 25
  };

  componentWillMount() {
    this.props.actions.resetListProducts();
    window.scrollTo(0, 0);
    const category = decodeURI(window.location.pathname.split('/')[2]);
    this.props.actions.getListCategory(this.props.history);
    let {page, per_page} = this.state;
    this.props.actions
      .getProductsByCategory(category, {page, per_page})
      .then(() => {
        this.setState({loading: false});
      });
    if (window.location.pathname.match(/category/)) {
      this.setState({
        category
      });
    }
  }
  componentDidMount() {
    const {history} = this.props;
    initGA();
    logPageView();
  }
  componentWillReceiveProps(newProps) {
    const category = decodeURI(window.location.pathname.split('/')[2]);
    if (this.state.category !== category) {
      this.props.actions.resetListProducts();
      window.scrollTo(0, 0);
      this.setState({loading: true});
      this.props.actions.getListCategory(this.props.history);
      let {page, per_page} = this.state;
      this.props.actions
        .getProductsByCategory(category, category, {page, per_page})
        .then(() => {
          this.setState({loading: false});
        });
      if (window.location.pathname.match(/category/)) {
        this.setState({
          category
        });
      }
    }
  }
  handleScroll = () => {
    // console.log('handle scroll');
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

    let {page, per_page, category} = this.state;
    this.setState({page: page + 1, per_page});

    if (windowBottom >= docHeight - 1000) {
      // showing scroll loader based on reducer isFetchPagination value
      this.setState({scrollLoader: true});

      // prevent multiple dispatch when isFetchPagination is tru
      !this.props.scrollFetch &&
        this.props.actions
          .getProductsByCategory(category, {page: page + 1, per_page})
          .then(() => {
            this.setState({scrollLoader: false});
          });
    }
  };

  render() {
    const {categories} = this.props;
    if (!categories.fetched) {
      return <Components.Loader />;
    }
    const category = categories.listCategory.filter(category => {
      return category.name === this.state.category;
    })[0];
    return (
      <div className="category-detail-page">
        <BottomScrollListener onBottom={this.handleScroll} offset={1000}>
          <Components.topMenu>
            <Components.pageMenu>Kategori {category.name}</Components.pageMenu>
          </Components.topMenu>

          {this.props.products.category === this.state.category &&
          !this.state.loading ? (
            <Components.contentWrapper contentName="category-title-content">
              <div className="card">
                <Link to="/category" className="color-gold">
                  <div className="category-detail-other border-bottom">
                    <span className="mdi mdi-view-grid" /> Kategori Lainya
                  </div>
                </Link>
                {
                  <div className="category-detail-other">
                    <div className="media category-detail-media">
                      <img
                        className="align-self-center mr-3 rounded-circle"
                        src={category.image_thumb_path}
                        alt="Hijab Category"
                        style={{width: '4rem'}}
                      />
                      <div className="media-body">
                        <div className="mt-0 category-detail-title color-light-black">
                          {category.name}
                        </div>
                        <div className="category-detail-desc color-soft-grey">
                          Koleksi {category.name} terkini.
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </Components.contentWrapper>
          ) : (
            <Components.Loader />
          )}
          {!this.state.loading && (
            <Components.contentWrapper contentName="bycategory-list-content">
              <Components.ScrollLoader load={this.state.scrollLoader} />
              <GridWrapper>
                <Components.Card
                  products={this.props.products.filteredProducts}
                  grid
                />
              </GridWrapper>
            </Components.contentWrapper>
          )}
          <Components.bottomMenu />
        </BottomScrollListener>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {getListCategory, getProductsByCategory, resetListProducts},
    dispatch
  )
});

const mapStateToProps = state => ({
  categories: state.categoryReducers,
  products: state.homeReducers
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getProductsByVendor,
  getVendorDetail,
  resetListVendorProducts
} from '../_actions/vendorActions';
import * as Components from '../components';
import ImgCategory from '../static/img/hijab-category.png';
import BottomScrollListener from 'react-bottom-scroll-listener';
import {logPageView, initGA} from '../shared/utils/Analytics';

class VendorDetail extends Component {
  state = {
    vendor: '',
    loading: true,
    scrollLoader: false,
    page: 1,
    per_page: 15
  };
  componentWillMount() {
    this.props.actions.resetListVendorProducts();
    window.scrollTo(0, 0);
    const vendor = decodeURI(window.location.pathname.split('/')[2]);
    let {page, per_page} = this.state;
    this.props.actions.getVendorDetail(vendor)
      .then(() => {
        this.props.actions
      .getProductsByVendor(vendor, {page, per_page})
      .then(() => {
        this.setState({loading: false});
      });
    })
    if (window.location.pathname.match(/seller/)) {
      this.setState({
        vendor
      });
    }
  }
  componentDidMount() {
    const {history} = this.props;
    initGA();
    logPageView();
  }
  componentWillReceiveProps(newProps) {
    const vendor = decodeURI(window.location.pathname.split('/')[2]);
    if (this.state.vendor !== vendor) {
      this.props.actions.resetListVendorProducts();
      window.scrollTo(0, 0);
      this.setState({loading: true});
      this.props.actions.getListCategory(this.props.history);
      let {page, per_page} = this.state;
      this.props.actions.getVendorDetail(vendor)
        .then(() => {
          this.props.actions
        .getProductsByVendor(vendor, {page, per_page})
        .then(() => {
          this.setState({loading: false});
        });
      })
      if (window.location.pathname.match(/seller/)) {
        this.setState({
          vendor
        });
      }
    }
  }
  handleScroll = () => {
    let {page, per_page, vendor} = this.state;
    this.setState({page: page + 1, per_page});
    this.setState({scrollLoader: true});
    this.props.actions
      .getProductsByVendor(vendor, {page: page + 1, per_page})
      .then(() => {
        this.setState({scrollLoader: false});
      });
  };

  render() {
    const {data} = this.props;
    if (!data.fetched) {
      return <Components.Loader />;
    }
    const { vendor, listProducts } = data
    return (
      <div className="category-detail-page">
        <BottomScrollListener onBottom={this.handleScroll} offset={1000}>
          <Components.topMenu>
            <Components.pageMenu>Kategori {this.state.vendor}</Components.pageMenu>
          </Components.topMenu>

          {vendor && !this.state.loading ? (
            <Components.contentWrapper contentName="category-title-content">
              <div className="card">
                {
                  <div className="category-detail-other">
                    <div className="media category-detail-media detail-vendor">
                      <img
                        className="align-self-center mr-3 rounded"
                        src={vendor.image_thumb_path}
                        alt={vendor.name}
                        style={{width: '4rem'}}
                      />
                      <div className="media-body">
                        <div className="mt-0 category-detail-title color-light-black">
                          {vendor.name}
                        </div>
                        {vendor.ig_link && (
                            <React.Fragment>
                              <a target="_blank" className="color-gold" href={`https://instagram.com/${vendor.ig_link.replace('@', '')}`}><span>{vendor.ig_link}</span></a>
                            </React.Fragment>
                          )}
                        <div className="category-detail-desc color-soft-grey">
                          <b className="vendor-desc-address">{vendor.city ? `${vendor.address}, ` : vendor.address} {vendor.city || ''} {vendor.province ? `, ${vendor.province}` : ''}</b>
                          <br/>
                          <span className="vendor-desc-caption">{vendor.caption}</span>                        
                          <br/>
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
              <Components.Card
                products={listProducts}
                grid
              />
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
    {getProductsByVendor, resetListVendorProducts, getVendorDetail},
    dispatch
  )
});

const mapStateToProps = state => ({
  data: state.VendorReducers,
});
export default connect(mapStateToProps, mapDispatchToProps)(VendorDetail);

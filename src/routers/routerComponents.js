import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import ReactGA from 'react-ga';

import HomePage from '../pages/Home';
import DetailContainer from '../containers/detailContainer';
import CartContainer from '../containers/cartContainer';
import CategoryContainer from '../containers/categoryContainer';
import CategoryDetailContainer from '../containers/categoryDetailContainer';
import VendorDetailContainer from '../containers/vendorDetailContainer';
import SearchContainer from '../containers/searchContainer';
import FormEmailContainer from '../containers/formEmailContainer';
import ShippingContainer from '../containers/shippingContainer';
import ShippingPaymentContainer from '../containers/shippingPaymentContainer';
import ShippingReviewContainer from '../containers/shippingReviewContainer';
import CheckoutContainer from '../containers/checkoutContainer';
import WishlistContainer from '../containers/wishListContainer';
import MenuContainer from '../containers/menuContainer';
import DetailPage from '../pages/detailPage';
import ContactUs from '../pages/contactUsPage';
import Policy from '../pages/policyPage';
import CostCheck from '../pages/costCheckPage';
import ShippingStatus from '../pages/shippingStatusPage';
import FaqList from '../pages/Faq/faqListPage';
import FaqListDetail from '../pages/Faq/FaqDetail/faqDetailPage';
import AboutPage from '../pages/aboutPage';

export const routes = [
  {path: '/', component: HomePage},
  {path: '/detail/:id', component: DetailPage},
  {path: '/search', component: SearchContainer},
  {path: '/cart', component: CartContainer},
  {path: '/category', component: CategoryContainer},
  {path: '/category/:category_id', component: CategoryDetailContainer},
  {path: '/history-check', component: FormEmailContainer},
  {path: '/shipping', component: ShippingContainer},
  {path: '/shipping/select-payment', component: ShippingPaymentContainer},
  {path: '/shipping/review', component: ShippingReviewContainer},
  {path: '/checkout', component: CheckoutContainer},
  {path: '/wishlist', component: WishlistContainer},
  {path: '/menu', component: MenuContainer},
  {path: '/contact-us', component: ContactUs},
  {path: '/faq', component: FaqList},
  {path: '/policy', component: Policy},
  {path: '/shipping-cost', component: CostCheck},
  {path: '/shipping-status', component: ShippingStatus},
  {path: '/faq/detail', component: FaqListDetail},
  {path: '/about', component: AboutPage},
  {path: '/seller/:vendor_name', component: VendorDetailContainer}
];
const routesScrollToTop = [
  '/menu',
  '/cart',
  '/category',
  '/contact-us',
  '/faq',
  '/policy',
  '/shipping-cost',
  '/shipping-status',
  '/about',
  '/seller'
];

class RouterComponents extends Component {
  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    const {
      location: {pathname}
    } = nextProps;

    if (nextProps.location.state && nextProps.location.state.isScrollToTop) {
      this.scrollToTop();
    }
    if (routesScrollToTop.includes(pathname)) {
      this.scrollToTop();
    }

    if (nextProps.location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop = () => {
    window && window.scrollTo(0, 0);
  };

  render() {
    const {location} = this.props;
    return (
      <div>
        <Switch>
          {routes.map((route, index) => {
            return <Route exact key={index} {...route} />;
          })}
        </Switch>
      </div>
    );
  }
}

export default RouterComponents;

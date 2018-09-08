import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {getSortedProducts} from '../_actions/homeActions';
import * as Components from '../components';

import Layout, {Container} from './Layout/Layout';
import {logPageView, initGA} from '../shared/utils/Analytics';

class WishListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: '',
      loading: true,
      sortActive: false,
      bottomHide: true
    };
  }

  componentWillMount() {
    this.props.getSortedProducts(this.props.history).then(
      setTimeout(() => {
        this.setState({allProducts: this.props.homeReducers.products});
        this.setState({loading: false});
      }, 1000)
    );
  }
  componentDidMount(){
    initGA();
    logPageView();
  }
  render() {
    const layoutProps = {
      type: 1,
      headerProps: {
        sortActive: this.state.sortActive,
        bottomHide: this.state.bottomHide
      }
    };
    return (
      <Layout {...layoutProps}>
        <Container>
          {this.state.loading ? (
            <Components.Loader loading={this.state.loading} />
          ) : (
            <Components.contentWrapper contentName="page-content">
              <Components.Card allProducts={this.state.allProducts} />
            </Components.contentWrapper>
          )}
        </Container>
        <Component.BottomMenu />
      </Layout>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  dispatch,
  getSortedProducts: query => dispatch(getSortedProducts(query))
});
const mapStateToProps = state => {
  return {
    homeReducers: state.homeReducers
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WishListPage)
);

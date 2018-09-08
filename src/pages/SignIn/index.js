import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Header from '../../components/Header'
import Text from '../../components/Form/Text'
import FormContainer from '../../components/Form/FormContainer'
import Button from '../../components/Button'
import './style.scss'

class HomePage extends Component {
  state = {
    menus: [
      {
        text: 'SIGN IN',
        onClick: () => {},
        Icon: null,
        active: true
      },
      {
        text: 'SIGN UP',
        onClick: () => {},
        Icon: null,
        active: false
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <Header menus={this.state.menus} />
        <Container gutter={GUTTER_TYPE.TOP}>
          <FormContainer>
            <Text type="text" placeholder="Username"/>
            <Text type="password" placeholder="Password"/>
            <div className="action">
              <Link className="link" to="">Forgot Password</Link>
            </div>
            <Button type="primary">CONTINUE</Button>
          </FormContainer>
        </Container>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  // fetching: () => dispatch(fetching()),
  // getProducts: query => dispatch(getProducts(query)),
  // getHeadlines: () => dispatch(getHeadlines()),
  // getSortedProducts: query => dispatch(getSortedProducts(query))
});
const mapStateToProps = state => ({
  User: state.User
  // sortBy: state.homeReducers.sortBy,
  // products: state.homeReducers.products,
  // headlines: state.homeReducers.headlines,
  // fetched: state.homeReducers.fetched,
  // scrollFetch: state.homeReducers.isFetchPagination
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

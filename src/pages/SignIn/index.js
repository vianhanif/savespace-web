import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom'
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Header from '../../components/Header'
import Text from '../../components/Form/Text'
import FormContainer from '../../components/Form/FormContainer'
import Button from '../../components/Button'
import './style.scss'

class SignIn extends Component {
  state = {
    menus: [
      {
        text: 'SIGN IN',
        onClick: () => {this.props.history.replace('/signin')},
        Icon: null,
        active: true
      },
      {
        text: 'SIGN UP',
        onClick: () => {this.props.history.replace('/signup')},
        Icon: null,
        active: false
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <Header title={this.props.App.title} menus={this.state.menus} />
        <Container gutter={GUTTER_TYPE.TOP}>
          <FormContainer>
            <Text type="text" placeholder="Username"/>
            <Text type="password" placeholder="Password"/>
            <div className="action">
              <Link className="link" to="">Forgot Password</Link>
            </div>
            <Button type="primary" onClick={() => this.props.history.replace('/home')}>CONTINUE</Button>
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
  User: state.User,
  App: state.App
  // sortBy: state.homeReducers.sortBy,
  // products: state.homeReducers.products,
  // headlines: state.homeReducers.headlines,
  // fetched: state.homeReducers.fetched,
  // scrollFetch: state.homeReducers.isFetchPagination
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));

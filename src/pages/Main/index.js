import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Loader from '../../components/Loader';
import * as userActions from '../../_actions/User'

class Main extends Component {
  state = {

  };

  componentWillMount() {
    console.log(this.props)
      this.props.dispatch(userActions.getUser())
      .then(response => {
          if (!this.props.User.data) {
            this.props.history.push('/signin')
          }
      })
  }

  render() {
    return <Loader />
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
});
const mapStateToProps = state => ({
    User: state.User
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

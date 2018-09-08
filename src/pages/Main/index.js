import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Loader from '../../components/Loader';
import * as userActions from '../../_actions/User'
import * as appActions from '../../_actions/App'

class Main extends Component {
  state = {

  };

  componentWillMount() {
    this.props.dispatch(appActions.setTitle('Save Space'))
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

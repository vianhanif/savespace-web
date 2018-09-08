import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Loader from '../../components/Loader';
import Header from '../../components/Header'
import SpacesContainer from '../../_containers/Spaces'
import BottomMenu from '../../components/BottomMenu'

class Home extends Component {
  state = {
    fetched: true
  };

  render() {
    return this.state.fetched ? 
     (
      <Fragment>
        <Header/>
          <Container gutter={GUTTER_TYPE.BOTH}>
            <SpacesContainer/>
          </Container>
        <BottomMenu/>
      </Fragment>
     ) : <Loader/>
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
});
const mapStateToProps = state => ({
  User: state.User,
  Space: state.Space
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

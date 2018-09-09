import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Loader from '../../components/Loader';
import Header from '../../components/Header'
import BottomMenu from '../../components/BottomMenu'
import * as appActions from '../../_actions/App'

class DetailSpace extends Component {
  state = {
    fetched: true,
  };

  componentWillMount() {
    this.props.dispatch(appActions.setTitle('DetailSpace'))
  }

  render() {
    return this.state.fetched ? 
     (
      <Fragment>
        <Header title={this.props.App.title}/>
        <Container gutter={GUTTER_TYPE.BOTH}>
        </Container>
        <BottomMenu confirm={[
          {
            text: 'Kembali',
            onClick: () => {this.props.history.replace('/home')}
          },
          {
            text: 'Jadwal',
            onClick: () => {}
          }
        ]}/>
      </Fragment>
     ) : <Loader/>
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
});
const mapStateToProps = state => ({
  App: state.App
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailSpace));
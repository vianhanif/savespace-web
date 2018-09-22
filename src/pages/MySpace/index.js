import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Loader from '../../components/Loader';
import DayPicker from 'react-day-picker'
import Header from '../../components/Header'
import BottomMenu from '../../components/BottomMenu'
import Button from '../../components/Button'
import OrdersContainer from '../../_containers/Orders'
import MySpacesContainer from '../../_containers/MySpace'
import * as appActions from '../../_actions/App'
import 'react-day-picker/lib/style.css';
import './style.scss';
import classNames from 'classnames'

class MySpace extends Component {
  state = {
    fetched: true
  };

  componentWillMount() {
    this.props.dispatch(appActions.setTitle('Jadwal'))
  }

  render() {
    return this.state.fetched ? (
      <Fragment>
        <Header title={this.props.App.title}/>
        <Container gutter={GUTTER_TYPE.BOTH}>
          <label className="date-title">Ruangan Anda</label>
          <MySpacesContainer/>
          <div className="picker-header">
            <p className="date">Minggu, 16 Jul 2018</p>
            <label className="title">Cyber Bintaro Room</label>
          </div>
          <DayPicker className="day-picker"/>
          <OrdersContainer owned={true}/>
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
    App: state.App
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MySpace));

import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Loader from '../../components/Loader';
import Header from '../../components/Header'
import BottomMenu from '../../components/BottomMenu'
import Button from '../../components/Button'
import Select from '../../components/Form/Select'
import * as appActions from '../../_actions/App'
import 'react-day-picker/lib/style.css';
import './style.scss';
import classNames from 'classnames'
import OrdersContainer from '../../_containers/Orders'

class History extends Component {
  state = {
    fetched: true,
    timeOptions: [
      { key: '1', value: '06.00', status: 'booked'},
      { key: '2', value: '07.00', status: ''},
      { key: '3', value: '08.00', status: ''},
      { key: '4', value: '09.00', status: 'booked'},
      { key: '5', value: '10.00', status: ''},
      { key: '6', value: '11.00', status: 'booked'},
      { key: '7', value: '12.00', status: 'booked'},
      { key: '8', value: '13.00', status: ''}
    ]
  };

  componentWillMount() {
    this.props.dispatch(appActions.setTitle('Reservasi Anda'))
  }

  render() {
    return this.state.fetched ? (
      <Fragment>
        <Header title={this.props.App.title}/>
        <Container gutter={GUTTER_TYPE.BOTH}>
          <label className="head-title">Reservasi Anda</label>
          <Select
            placeholder="Pilih Bulan"
            options={[
              {text: 'JUL 2018', value: 'juli-2018'},
              {text: 'AUG 2018', value: 'aug-2018'},
              {text: 'SEP 2018', value: 'sep-2018'}
            ]}
          />
          <OrdersContainer/>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(History));

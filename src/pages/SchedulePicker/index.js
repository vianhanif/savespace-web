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
import * as appActions from '../../_actions/App'
import 'react-day-picker/lib/style.css';
import './style.scss';
import classNames from 'classnames'

class SchedulePicker extends Component {
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
    this.props.dispatch(appActions.setTitle('Jadwal'))
  }

  render() {
    return this.state.fetched ? (
      <Fragment>
        <Header title={this.props.App.title}/>
        <Container gutter={GUTTER_TYPE.BOTH}>
          <label className="date-title">Pilih Tanggal Kunjungan</label>
          <div className="picker-header">
            <p className="date">Minggu, 16 Jul 2018</p>
            <label className="title">Cyber Bintaro Room</label>
          </div>
          <DayPicker className="day-picker"/>
          <label className="time-title">Pilih Waktu Kunjungan</label>
          <div className="time-label-container">
            <div className="time-label">
              <div className="color-open"></div>
              <label>Open</label>
            </div>
            <div className="time-label">
              <div className="color-booked"></div>
              <label>Booked</label>
            </div>
          </div>
          <div className="time-container">
            {this.state.timeOptions.map((item, index) => (
              <div className="time" key={item.key}>
                <div className={classNames(
                    {
                      'time-open': (item.status === ''),
                      'time-booked': (item.status === 'booked')
                    })}>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="submit">
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </div>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SchedulePicker));

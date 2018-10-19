import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Loader from '../../components/Loader';
import Header from '../../components/Header'
import BottomMenu from '../../components/BottomMenu'
import Button from '../../components/Button'
import Text from '../../components/Form/Text'
import Select from '../../components/Form/Select'
import FormContainer from '../../components/Form/FormContainer'
import * as appActions from '../../_actions/App'
import 'react-day-picker/lib/style.css';
import './style.scss';
import classNames from 'classnames'

class BookingForm extends Component {
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
          <div className="form-header">
            <p className="date">Minggu, 16 Jul 2018</p>
            <label className="title">Cyber Bintaro Room</label>
          </div>
          <label className="form-title">Formulir Booking</label>
          <FormContainer className="form-item">
            <Select placeholder="Reguler" options={[]}/>
            <Text type="text" placeholder="Judul Pengiriman"/>
            <Text type="text" placeholder="Nama Penanggung Jawab"/>
            <Text type="email" placeholder="Alamat Email"/>
            <Text type="telp" placeholder="No. Telp"/>
            <Text type="number" placeholder="Jumlah Peserta"/>
          </FormContainer>
          <div className="submit">
            <Button onClick={() => this.props.history.goBack()}>Cancel</Button>
            <Button>Ok</Button>
          </div>
        </Container>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));

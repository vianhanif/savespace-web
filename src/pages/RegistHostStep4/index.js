import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Loader from '../../components/Loader';
import Header from '../../components/Header'
import Button from '../../components/Button'
import * as appActions from '../../_actions/App'
import CheckBox from '../../components/Form/CheckBox'
import './style.scss';

class RegistHostStep4 extends Component {
  state = {
    fetched: true
  };

  componentWillMount() {
    this.props.dispatch(appActions.setTitle('Intro'))
  }

  render() {
    return this.state.fetched ? (
      <Fragment>
        <Header title={this.props.App.title}/>
        <Container gutter={GUTTER_TYPE.BOTH}>
          <div className="regist-step4-container">
            <label className="title">
              Fasilitas Lain
            </label>
            <br/>
            <label className="subtitle">
              Non Jaringan & Multimedia
            </label>
            <div className="regist-form">
              <div className="row justify-content-around">
                <div className="col-xs">
                  <CheckBox className="check" id="fasilitas_wifi">Resepsionis</CheckBox>
                  <CheckBox className="check" id="fasilitas_conf">Security</CheckBox>
                  <CheckBox className="check" id="fasilitas_video">Ruang Ibadah</CheckBox>
                </div>
                <div className="col-xs">
                  <CheckBox className="check" id="fasilitas_led">Lobby</CheckBox>
                  <CheckBox className="check" id="fasilitas_proyektor">Dapur</CheckBox>
                  <CheckBox className="check" id="fasilitas_white_board">F & B</CheckBox>
                </div>
              </div>
            </div>
            <div className="options">
              <div className="left">
                <Button>Kembali</Button>
              </div>
              <div className="right">
                <Button onClick={() => this.props.history.push('/regist_host_step5')}>Ok</Button>
              </div>
            </div>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistHostStep4));

import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Loader from '../../components/Loader';
import Header from '../../components/Header'
import Button from '../../components/Button'
import * as appActions from '../../_actions/App'
import Text from '../../components/Form/Text'
import './style.scss';

class RegistHostStep1 extends Component {
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
          <div className="regist-step1-container">
            <label className="title">
              Informasi Pemilik
            </label>
            <div className="regist-form">
              <Text type="text" placeholder="Name"></Text>
              <Text type="text" placeholder="No. KTP"></Text>
              <Text type="email" placeholder="Email"></Text>
              <Text type="telp" placeholder="No. Telp"></Text>
            </div>
            <div className="options">
              <div className="left">
                <Button>Kembali</Button>
              </div>
              <div className="right">
                <Button onClick={() => this.props.history.push('/regist_host_step2')}>Ok</Button>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistHostStep1));

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
import Select from '../../components/Form/Select'
import './style.scss';

class RegistHostStep2 extends Component {
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
          <div className="regist-step2-container">
            <label className="title">
              Informasi Ruangan
            </label>
            <div className="regist-form">
              <Text type="text" placeholder="Nama Ruangan"></Text>
              <Select placeholder="Kategori"></Select>
              <Select placeholder="Ukuran"></Select>
              <Select placeholder="Kapasitas"></Select>
            </div>
            <div className="options">
              <div className="left">
                <Button>Kembali</Button>
              </div>
              <div className="right">
                <Button onClick={() => this.props.history.push('/regist_host_step3')}>Ok</Button>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistHostStep2));

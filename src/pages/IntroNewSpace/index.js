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

class IntroNewSpace extends Component {
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
          <div className="intro-container">
            <label className="title">
              Bergabunglah Bersama Kami dan dapatkan pendapatan extra dari ruangan anda
            </label>
            <CheckBox className="check" id="check-intro">Saya setuju dengan syarat & ketentuan yang diberikan oleh save space</CheckBox>
            <div className="options">
              <div className="left">
                <Button>Kembali</Button>
              </div>
              <div className="right">
                <Button>Ok</Button>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IntroNewSpace));

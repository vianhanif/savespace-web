import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Loader from '../../components/Loader';
import Header from '../../components/Header'
import FloatingGroup from '../../components/FloatingButton/Group'
import FloatingButton from '../../components/FloatingButton'
import BottomMenu from '../../components/BottomMenu'
import CategoriesContainer from '../../_containers/Categories'
import * as appActions from '../../_actions/App'
import { SearchIcon, CalendarDayIcon, FavoriteIcon } from 'mdi-react'
import './style.scss'

class Category extends Component {
  state = {
    fetched: true,
    floats: [
      {
        icon: <SearchIcon color="#ffffff"/>,
        route: () => this.props.history.push('/category')
      },
      {
        icon: <CalendarDayIcon color="#ffffff"/>,
        route: () => this.props.history.push('/history')
      },
      {
        icon: <FavoriteIcon color="#ffffff"/>,
        route: () => this.props.history.push('/home')
      }
    ]
  };

  componentWillMount() {
    this.props.dispatch(appActions.setTitle('Category'))
  }

  render() {
    return this.state.fetched ? 
     (
      <Fragment>
        <Header title={this.props.App.title}/>
        <Container gutter={GUTTER_TYPE.BOTH}>
          <label className="header">Pick your main activity</label>
          <CategoriesContainer/>
        </Container>
        <FloatingGroup>
          {this.state.floats.map((item, index) => (
            <FloatingButton key={index} onClick={() => item.route()}>
              {item.icon}
            </FloatingButton>
          ))}
        </FloatingGroup>
        <BottomMenu/>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));

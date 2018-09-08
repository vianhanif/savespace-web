import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container} from '../../components/Layout/Layout';
import {GUTTER_TYPE} from '../../components/Layout/LayoutStyled';
import Loader from '../../components/Loader';
import Header from '../../components/Header'
import SpacesContainer from '../../_containers/Spaces'
import BottomMenu from '../../components/BottomMenu'
import FloatingGroup from '../../components/FloatingButton/Group'
import FloatingButton from '../../components/FloatingButton'
import { SearchIcon, CalendarDayIcon, FavoriteIcon } from 'mdi-react'

class Home extends Component {
  state = {
    fetched: true,
    floats: [
      {
        icon: <SearchIcon color="#ffffff"/>,
        route: () => this.props.history.push('/home')
      },
      {
        icon: <CalendarDayIcon color="#ffffff"/>,
        route: () => this.props.history.push('/home')
      },
      {
        icon: <FavoriteIcon color="#ffffff"/>,
        route: () => this.props.history.push('/home')
      }
    ]
  };

  render() {
    return this.state.fetched ? 
     (
      <Fragment>
        <Header/>
        <Container gutter={GUTTER_TYPE.BOTH}>
          <SpacesContainer/>
        </Container>
        <FloatingGroup>
          {this.state.floats.map((item, index) => (
            <FloatingButton key={index}>
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
  User: state.User,
  Space: state.Space
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

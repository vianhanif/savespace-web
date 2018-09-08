import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn'

export const routes = [
  {path: '/', component: Main},
  {path: '/signin', component: SignIn}

];
const routesScrollToTop = [
  '/',
  '/signin'
];

class RouterComponents extends Component {
  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    const {
      location: {pathname}
    } = nextProps;

    if (nextProps.location.state && nextProps.location.state.isScrollToTop) {
      this.scrollToTop();
    }
    if (routesScrollToTop.includes(pathname)) {
      this.scrollToTop();
    }

    if (nextProps.location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop = () => {
    window && window.scrollTo(0, 0);
  };

  render() {
    const {location} = this.props;
    return (
      <div>
        <Switch>
          {routes.map((route, index) => {
            return <Route exact key={index} {...route} />;
          })}
        </Switch>
      </div>
    );
  }
}

export default RouterComponents;

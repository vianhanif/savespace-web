import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

export const routes = [
  {path: '/', component: require('../pages/Main').default},
  {path: '/signin', component: require('../pages/SignIn').default},
  {path: '/signup', component: require('../pages/SignUp').default},
  {path: '/home', component: require('../pages/Home').default}
];
let routesScrollToTop = [];
routes.forEach(item => {
  routesScrollToTop.push(item.path)
})

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

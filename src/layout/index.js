import React, {Fragment} from 'react';
import {topMenu as TopMenu, homeMenu as HomeMenu, bottomMenu as BottomMenu} from '../components';

const Layout = ({children}) => (
  <Fragment>
    {children}
    <BottomMenu />
  </Fragment>
);

export default Layout;

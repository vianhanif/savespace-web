import React, {Fragment} from 'react';
import Header from '../../components/Header/Header';
import {Container as ContainerStyled} from './LayoutStyled';

export const Container = ContainerStyled;

const Layout = props => {
  const {type, headerProps, children} = props;
  switch (type) {
    case 1:
      return (
        <Fragment>
          <Header {...headerProps} />
          {children}
        </Fragment>
      );
    default:
    // No default
  }
};

export default Layout;

import React, {Fragment} from 'react';
import styled from 'styled-components';

import './MenuPage.scss';

const CardMenu = styled.div`
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.24), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 15px 25px 15px 15px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 1rem;
  h2 {
    font-size: 1.4rem;
    margin-bottom: 1.1rem;
  }
`;

const MenuCard = props => {
  const {type, children} = props;
  switch (type) {
    case 1:
      return (
        <Fragment>
          <CardMenu className="bg-light">{children}</CardMenu>
        </Fragment>
      );
    case 2:
      return (
        <Fragment>
          <CardMenu className="bg-light-grey">{children}</CardMenu>
        </Fragment>
      );
    default:
  }
};

export default MenuCard;

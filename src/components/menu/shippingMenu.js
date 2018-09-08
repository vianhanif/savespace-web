import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../static/img/ebaba-logo.png';

import styled from 'styled-components';

const ShippingMenu = styled.div`
  .shipping-menu {
    border-bottom: 0.5px solid #dfe3e6;
  }
`;

class shippingMenu extends Component {
  render() {
    return (
      <ShippingMenu>
        <div className="shipping-menu bg-light" style={{padding: '0.8rem 0'}}>
          <div className="container">
            <div className="row align-center">
              <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-xs-12">
                <Link to="/">
                  <img
                    src={Logo}
                    className="ebaba-logo "
                    alt="ebaba-logo svg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ShippingMenu>
    );
  }
}

export default shippingMenu;

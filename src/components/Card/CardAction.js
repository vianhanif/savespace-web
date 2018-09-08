import React, {Component} from 'react';
import styled from 'styled-components';

import HeartIcon from '../../shared/svg-icons/HeartIcon';
import ShareIcon from '../../shared/svg-icons/ShareIcon';

const Action = styled.div`
  display: inline;
  cursor: pointer;
  .icon {
    display: inline-flex;
    vertical-align: middle;
    height: 24px;
    position: relative;
    top: 2px;
  }
  .text {
    padding-left: 10px;
    font-size: 12px;
    font-weight: normal;
  }
`;

class CartAction extends Component {
  state = {
    active: false
  };

  getLiked = () => {
    this.setState({active: !this.state.active});
  };

  render() {
    return (
      <div className="card-action">
        <Action style={{marginRight: '1.45rem'}} onClick={this.getLiked}>
          <div className="icon">
            <HeartIcon active={this.state.active} />
          </div>
          <span className="text">Suka</span>
        </Action>
        <Action style={{marginRight: '1.45rem'}}>
          <div className="icon">
            <ShareIcon />
          </div>
          <span className="text">Bagikan</span>
        </Action>
      </div>
    );
  }
}

export default CartAction;

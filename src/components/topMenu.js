import React, {Component} from 'react';

class topMenu extends Component {
  render() {
    return <div className="fixed-top border-bottom">{this.props.children}</div>;
  }
}

export default topMenu;

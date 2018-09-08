import React, {Component} from 'react';
import classNames from 'classnames';

class contentWrapper extends Component {
  render() {
    const {contentName, padding, align} = this.props;
    return (
      <div className={classNames(contentName, 'container')}>
        <div className="row">
          <div
            className={classNames(
              padding,
              align,
              'col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-xs-12'
            )}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default contentWrapper;

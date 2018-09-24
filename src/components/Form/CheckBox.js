import React, {Component} from 'react';
import classNames from 'classnames'
import './style.scss'

class Text extends Component {
  state = {
    value: ''
  }

  render() {
    let {onChange} = this.props;
    if (!onChange) {
      onChange = (value) => {
        this.setState({value})
      }
    }
    return (
      <div className={classNames('custom-control custom-checkbox', [this.props.className])} style={this.props.style}>
          <input
              className="custom-control-input"
              type="checkbox"
              placeholder={this.props.placeholder}
              onChange={e => onChange(e.target.value)}
              id={this.props.id}
              style={{padding: '9px 12px'}}
            />
          <label for={this.props.id} className="custom-control-label">{this.props.children}</label>
      </div>
    );
  }
}

export default Text;

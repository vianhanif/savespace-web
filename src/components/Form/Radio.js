import React, {Component} from 'react';
import classNames from 'classnames'
import './style.scss'

class Radio extends Component {
  state = {
    checked: false
  }

  handleChange() {
    let {onChange} = this.props;
    if (!onChange) {
      onChange = (value) => {
        this.setState({value})
      }
    }
    this.setState({checked: !this.state.checked})
    onChange(this.props.value)
    alert('clicked')
  }

  render() {
    return (
      <div className={classNames('custom-control custom-checkbox', [this.props.className])} style={this.props.style}>
          <input
              className="custom-control-input"
              type="radio"
              value={this.props.value}
              checked={this.state.checked}
              onClick={(e) => this.handleChange()}
              style={{padding: '9px 12px'}}
            />
          <label htmlFor={this.props.id} className="custom-control-label">{this.props.children}</label>
      </div>
    );
  }
}

export default Radio;

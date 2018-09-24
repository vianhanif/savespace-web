import React, {Component} from 'react';
import './style.scss'

class Select extends Component {
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
      <div className="form-field">
        <div className="form-group">
          <select className="form-control" onChange={(e) => onChange(e.target.value)}>
            <option disabled selected>{this.props.placeholder}</option>
            {this.props.options && this.props.options.map((item, index) => (
              <option key={index} value={item.value}>{item.text}</option>
            ))}
          </select>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Select;

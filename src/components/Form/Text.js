import React, {Component} from 'react';
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
      <div className="form-field">
        <form>
          <div className="form-group">
            <input
              autoComplete={false}
              className="form-control"
              type={this.props.type}
              id="email-input"
              placeholder={this.props.placeholder}
              onChange={e => onChange(e.target.value)}
              style={{padding: '9px 12px'}}
            />
          </div>
          {this.props.children}
        </form>
      </div>
    );
  }
}

export default Text;

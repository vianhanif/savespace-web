import React, {Component} from 'react';
import classNames from 'classnames'
import './style.scss'

class TextArea extends Component {
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
      <div className={classNames('form-field', [this.props.className])} style={this.props.style}>
          <div className="form-group">
            <textarea
              autoComplete={false}
              className="form-control"
              id="textarea-input"
              placeholder={this.props.placeholder}
              onChange={e => onChange(e.target.value)}
              style={{padding: '9px 12px'}}
            />
          </div>
          {this.props.children}
      </div>
    );
  }
}

export default TextArea;

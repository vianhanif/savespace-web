import React, {Component} from 'react';

class FormEmail extends Component {
  render() {
    const {onChange} = this.props;
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="search"
              id="search-input"
              placeholder="Email atau Nomor Handphone"
              onChange={e => onChange(e)}
              style={{padding: '9px 12px'}}
            />
          </div>
          {this.props.children}
        </form>
      </div>
    );
  }
}

export default FormEmail;

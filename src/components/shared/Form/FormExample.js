import React, {Component} from 'react';
import InputGroup from './InputGroup';

class Form extends Component {
  state = {
    error: {},
    data: {
      bakso: ''
    }
  };
  onChange = e => {
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value}
    });
    if (this.state.data[e.target.name].length < 5) {
      return this.setState({
        error: {
          ...this.state.error,
          [e.target.name]: 'Must have 5 char length'
        }
      });
    } else {
      return this.setState({
        error: {
          ...this.state.error,
          [e.target.name]: ''
        }
      });
    }
  };
  render() {
    const {onChange} = this;
    const {bakso} = this.state.data;
    const {error} = this.state;
    return (
      <form>
        <InputGroup
          onChange={onChange}
          value={bakso}
          field="bakso"
          label="bakso"
          error={error.bakso}
        />
      </form>
    );
  }
}

export default Form;

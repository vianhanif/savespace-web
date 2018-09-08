import React from 'react';
import {string, number, func} from 'prop-types';

const InputGroup = ({type, value, error, onChange, field, label}) => (
  <div className="form-group">
    {label && <label>{label}</label>}
    <input
      type={type}
      name={field}
      value={value}
      placeholder={label}
      className="form-control"
      onChange={onChange}
    />
    {error && <div className="alert alert-danger">{error}</div>}
  </div>
);

InputGroup.propTypes = {
  type: string,
  value: string,
  label: string,
  onChange: func,
  field: string,
  error: string
};

export default InputGroup;

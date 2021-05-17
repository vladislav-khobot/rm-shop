import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './Input.style';

function Input(props) {
  const { type, value, placeholder, onChange } = props;

  return (
    <StyledInput
      data-testid="input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  onChange: () => {},
};

export { Input };

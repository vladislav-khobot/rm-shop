import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './Input.style';

function Input(props) {
  const { value, placeholder, onChange } = props;

  return (
    <StyledInput
      data-testid="input"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
};

export { Input };

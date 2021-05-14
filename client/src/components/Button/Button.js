import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.style';

const BUTTON_TYPES = {
  default: 'button',
  primary: 'submit',
};
function Button(props) {
  const { type, children, onClick } = props;

  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf([
    BUTTON_TYPES.default,
    BUTTON_TYPES.primary,
  ]),
  onClick: PropTypes.func,
  children: PropTypes.any,
};

Button.defaultProps = {
  type: BUTTON_TYPES.default,
  onClick: () => {},
  children: null,
};

export { Button };

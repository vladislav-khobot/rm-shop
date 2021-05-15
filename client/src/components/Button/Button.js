import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { StyledButton } from './Button.style';

import { BUTTON_TYPES } from './Button.types';

function Button(props) {
  const { type, children, onClick } = props;

  const className = clsx('btn', {
    default: type === BUTTON_TYPES.default,
    primary: type === BUTTON_TYPES.primary,
  });

  return (
    <StyledButton
      data-testid="button"
      className={className}
      type={type}
      onClick={onClick}
    >
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

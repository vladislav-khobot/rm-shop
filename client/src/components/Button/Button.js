import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.style';

function Button(props) {
  const { type, children, onClick } = props;

  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

Button.defaultProps = {
  type: '',
  onClick: () => {},
  children: undefined,
};

export { Button };

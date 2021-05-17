import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { THEME } from 'constants/theme';

import { StyledCircle } from './Circle.style';

function Circle(props) {
  const { color, active, onChange } = props;

  const onClick = useCallback(() => {
    onChange(color);
  }, [color, onChange]);

  const className = clsx({
    white: color === THEME.colors.mainWhite,
    active,
  });

  return (
    <StyledCircle
      data-testid="circle"
      className={className}
      color={color}
      onClick={onClick}
    />
  );
}

Circle.propTypes = {
  color: PropTypes.string,
  active: PropTypes.bool,
  onChange: PropTypes.func,
};

Circle.defaultProps = {
  color: THEME.colors.mainWhite,
  active: false,
  onChange: () => {},
};

export { Circle };

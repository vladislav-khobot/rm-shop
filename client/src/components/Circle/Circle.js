import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { THEME } from 'constants/theme';

import { StyledCircle } from './Circle.style';

function Circle(props) {
  const { color, active, onClick } = props;

  const onColorClick = useCallback(() => {
    onClick(color);
  }, [color, onClick]);

  const className = clsx({
    white: color === THEME.colors.mainWhite,
    active,
  });

  return (
    <StyledCircle
      data-testid="circle"
      className={className}
      color={color}
      onClick={onColorClick}
    />
  );
}

Circle.propTypes = {
  color: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Circle.defaultProps = {
  color: THEME.colors.mainWhite,
  active: false,
  onClick: () => {},
};

export { Circle };

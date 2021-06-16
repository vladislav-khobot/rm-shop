import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectCurrentColor } from 'store/common/selectors';

import { Circle } from 'components/Circle';
import { StyledColors } from './Colors.style';

function Colors(props) {
  const { colors, onClick } = props;
  const activeColor = useSelector(selectCurrentColor, shallowEqual);

  const onColorClick = useCallback((color) => {
    onClick(color);
  }, [onClick]);

  useEffect(() => {
    if (colors.length && !activeColor) {
      onClick(colors[0]);
    }
  }, [colors, activeColor, onClick]);

  return (
    <StyledColors data-testid="colors">
      {colors.map((color) => <Circle key={color} color={color} active={activeColor === color} onClick={onColorClick} />)}
    </StyledColors>
  );
}

Colors.propTypes = {
  colors: PropTypes.array,
  onClick: PropTypes.func,
};

Colors.defaultProps = {
  colors: [],
  onClick: () => {},
};

export { Colors };

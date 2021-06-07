import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { THEME } from 'constants/theme';

import { Circle } from 'components/Circle';
import { StyledColors } from './Colors.style';

function Colors(props) {
  const { colors, onClick } = props;

  const [activeColor, setActiveColor] = useState('');

  const onColorClick = useCallback((color) => {
    setActiveColor(color);
    onClick(color);
  }, [setActiveColor, onClick]);

  useEffect(() => {
    setActiveColor(THEME.colors.mainBlack);
  }, []);

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

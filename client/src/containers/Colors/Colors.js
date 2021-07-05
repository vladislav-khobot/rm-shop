import React from 'react';
import PropTypes from 'prop-types';

import { Circle } from 'components/Circle';
import { StyledColors } from './Colors.style';

function Colors(props) {
  const { colors, currentColor, onColorChange } = props;

  return (
    <StyledColors data-testid="colors">
      {colors.map((color) => <Circle key={color} color={color} active={currentColor === color} onClick={onColorChange} />)}
    </StyledColors>
  );
}

Colors.propTypes = {
  colors: PropTypes.array,
  currentColor: PropTypes.string,
  onColorChange: PropTypes.func,
};

Colors.defaultProps = {
  colors: [],
  currentColor: '',
  onColorChange: () => {},
};

export { Colors };

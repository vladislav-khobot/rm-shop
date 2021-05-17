import React from 'react';
import PropTypes from 'prop-types';

import { Ellipse } from 'components/Ellipse';
import { StyledColors } from './Colors.style';

function Colors(props) {
  const { colors, active, onChange } = props;

  return (
    <StyledColors data-testid="colors">
      {colors.map((color) => <Ellipse key={color} color={color} active={active} onChange={onChange} />)}
    </StyledColors>
  );
}

Colors.propTypes = {
  colors: PropTypes.array,
  active: PropTypes.string,
  onChange: PropTypes.func,
};

Colors.defaultProps = {
  colors: [],
  active: '',
  onChange: () => {},
};

export { Colors };

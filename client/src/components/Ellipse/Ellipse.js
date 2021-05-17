import React from 'react';
import PropTypes from 'prop-types';

import { THEME } from 'constants/theme';

import { StyledEllipse } from './Ellipse.style';

function Ellipse(props) {
  const { color, active, onChange } = props;

  return (
    <StyledEllipse
      data-testid={`ellipse-${color}-${active}`}
      color={color}
      data-color={color}
      active={active}
      onClick={onChange}
    />
  );
}

Ellipse.propTypes = {
  color: PropTypes.string,
  active: PropTypes.string,
  onChange: PropTypes.func,
};

Ellipse.defaultProps = {
  color: THEME.colors.mainWhite,
  active: '',
  onChange: () => {},
};

export { Ellipse };

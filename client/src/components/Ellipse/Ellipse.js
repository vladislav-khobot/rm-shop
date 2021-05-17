import React from 'react';
import PropTypes from 'prop-types';

import { THEME } from 'constants/theme';

import { StyledEllipse } from './Ellipse.style';

function Ellipse(props) {
  const { color } = props;

  return (
    <StyledEllipse color={color} />
  );
}

Ellipse.propTypes = {
  color: PropTypes.string,
};

Ellipse.defaultProps = {
  color: THEME.colors.mainWhite,
};

export { Ellipse };

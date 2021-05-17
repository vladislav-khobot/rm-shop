import React from 'react';
import PropTypes from 'prop-types';

import { Ellipse } from 'components/Ellipse';

function Colors(props) {
  const { colors, active, onChange } = props;

  return (
    <>
      {colors.map((color) => <Ellipse color={color} />)}
    </>
  );
}

Colors.propTypes = {
  colors: PropTypes.array,
  active: PropTypes.bool,
  onChange: PropTypes.func,
};

Colors.defaultProps = {
  colors: [],
  active: false,
  onChange: () => {},
};

export { Colors };

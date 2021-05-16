import React from 'react';
import PropTypes from 'prop-types';

function Colors(props) {
  const { colors, active, onChange } = props;

  return (
    <>
      {colors.map((color) => <div />)}
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

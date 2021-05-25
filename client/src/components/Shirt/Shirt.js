import React from 'react';
import PropTypes from 'prop-types';

import { THEME } from 'constants/theme';

import { SHIRT_SIZES } from './Shirt.sizes';
import { StyledShirt } from './Shirt.style';


function Shirt(props) {
  const { size, color, image } = props;

  return (
    <StyledShirt>
      test
    </StyledShirt>
  );
}

Shirt.propTypes = {
  size: PropTypes.oneOf([
    SHIRT_SIZES.small,
    SHIRT_SIZES.medium,
    SHIRT_SIZES.large,
  ]),
  color: PropTypes.string,
  image: PropTypes.string,
};

Shirt.defaultProps = {
  size: SHIRT_SIZES.medium,
  color: THEME.colors.mainBlue,
  image: '',
};

export { Shirt };

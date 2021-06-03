import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { THEME } from 'constants/theme';

import { SHIRT_SIZES } from './Shirt.sizes';
import { StyledShirt } from './Shirt.style';

import { ReactComponent as ShirtSVG } from './shirtVector.svg';

function Shirt(props) {
  const { size, color, image } = props;

  const className = clsx({
    small: size === SHIRT_SIZES.small,
    medium: size === SHIRT_SIZES.medium,
    large: size === SHIRT_SIZES.large,
  });

  return (
    <StyledShirt data-testid="shirt" className={className}>
      <ShirtSVG className="svg" fill={color} stroke={color === THEME.colors.mainWhite && THEME.colors.mainBlack} />
      <img src={image} alt="" />
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

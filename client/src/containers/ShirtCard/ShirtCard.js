import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { SHIRT_SIZES } from 'components/Shirt/Shirt.sizes';

import { Colors } from 'containers/Colors';
import { Sizes } from 'containers/Sizes';

import { Shirt } from 'components/Shirt';
import { Price, PRICE_SIZES } from 'components/Price';
import { Button, BUTTON_TYPES } from 'components/Button';

import { THEME } from 'constants/theme';
import { FormatUtils } from 'utils/FormatUtils';

import { StyledShirtCard } from './ShirtCard.style';

function ShirtCard(props) {
  const { name, image, gender, price, color, sizes, colors } = props;
  const formattedColor = THEME.colorsMatching[color] || '';
  const sortedSizes = FormatUtils.sortSizes(sizes);

  const [currentColor, setCurrentColor] = useState('');

  const colorsList = useMemo(() => {

    return colors.map(color => (
      THEME.colorsMatching[color] || ''
    ));
  }, [colors]);
  colorsList.sort();

  const onColorChange = useCallback((color) => {
    setCurrentColor(color);
  }, [setCurrentColor]);

  useEffect(() => {
    setCurrentColor(formattedColor);
  }, []);

  return (
    <StyledShirtCard data-testid="shirt-card">
      <div className="main">
        <div className="shirt">
          <Shirt size={SHIRT_SIZES.medium} color={currentColor} image={image} />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="colors">
            <div>Color</div>
            <Colors colors={colorsList} currentColor={currentColor} onColorChange={onColorChange} />
          </div>
          <div className="sizes">
            <div>Size</div>
            <Sizes sizes={sortedSizes} />
          </div>
          <div className="gender">
            <div>Gender</div>
            <div>{gender}</div>
          </div>
        </div>
      </div>
      <div className="price">
        <Price size={PRICE_SIZES.large} value={price} />
        <Button type={BUTTON_TYPES.primary}>
          <span>Buy</span>
        </Button>
      </div>
    </StyledShirtCard>
  );
}

ShirtCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  gender: PropTypes.string,
  price:  PropTypes.number,
  color: PropTypes.string,
  sizes: PropTypes.array,
  colors: PropTypes.array,
};

ShirtCard.defaultProps = {
  name: '',
  image: '',
  gender: '',
  price: 0,
  color: '',
  sizes: [],
  colors: [],
};

export { ShirtCard };

import React, { useCallback, useEffect, useState } from 'react';

import { Colors } from 'containers/Colors';
import { Sizes } from 'containers/Sizes';

import { Shirt, SHIRT_SIZES } from 'components/Shirt';
import { Price, PRICE_SIZES } from 'components/Price';
import { Button, BUTTON_TYPES } from 'components/Button';

import { THEME } from 'constants/theme';

import testImage from 'assets/images/test-print-image.png';

import { StyledShirtCard } from './ShirtCard.style';

function ShirtCard() {
  const [name, setName] = useState('');
  const [currentSize, setCurrentSize] = useState('');
  const [currentColor, setCurrentColor] = useState('');

  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState(0);

  const onColorClick = useCallback((color) => {
    setCurrentColor(color);
  }, [setCurrentColor]);

  useEffect(() => {
    setName('Rick Sanchez');
    setCurrentSize(SHIRT_SIZES.medium);
    setCurrentColor(THEME.colors.mainBlack);

    setColors([THEME.colors.mainBlack, THEME.colors.mainBlue, THEME.colors.mainWhite, THEME.colors.mainGreen]);
    setSizes(['S', 'M', 'L', 'XL', 'XXL', 'XXXL']);
    setGender('Man');
    setPrice(39.99);
  }, []);

  return (
    <StyledShirtCard data-testid="shirt-card">
      <div className="main">
        <div className="shirt">
          <Shirt size={currentSize} color={currentColor} image={testImage} />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="colors">
            <div>Color</div>
            <Colors colors={colors} onClick={onColorClick} />
          </div>
          <div className="sizes">
            <div>Size</div>
            <Sizes sizes={sizes} />
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

export { ShirtCard };

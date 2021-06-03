import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    setName('Rick Sanchez');
    setCurrentSize(SHIRT_SIZES.large);
    setCurrentColor(THEME.colors.mainBlue);

    setColors([THEME.colors.mainBlack, THEME.colors.mainBlue, THEME.colors.mainWhite, THEME.colors.mainGreen]);
    setSizes(['S', 'M', 'L', 'XL', 'XXL', 'XXXL']);
    setGender('Man');
    setPrice(39.99);
  }, []);

  return (
    <StyledShirtCard>
      <Shirt className="left" size={currentSize} color={currentColor} image={testImage} />
      <div className="middle">
        <div className="name">{name}</div>
        <div className="colors">
          <div>Color</div>
          <Colors colors={colors} />
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
      <div className="right">
        <Price size={PRICE_SIZES.large} value={price} />
        <Button type={BUTTON_TYPES.primary}>
          <span>Buy</span>
        </Button>
      </div>
    </StyledShirtCard>
  );
}

export { ShirtCard };

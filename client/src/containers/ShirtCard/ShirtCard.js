import React, { useCallback, useEffect, useState } from 'react';

import { Colors } from 'containers/Colors';
import { Sizes } from 'containers/Sizes';

import { Shirt, SHIRT_SIZES } from 'components/Shirt';
import { Price, PRICE_SIZES } from 'components/Price';
import { Button, BUTTON_TYPES } from 'components/Button';

import { CommonService } from 'services/CommonService';

import { StyledShirtCard } from './ShirtCard.style';

function ShirtCard() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [currentSize, setCurrentSize] = useState(null);
  const [currentColor, setCurrentColor] = useState('');

  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState(0);

  const setColorsList = useCallback(async () => {
    const colorsList = await CommonService.getColors();
    setColors(colorsList);
  }, [setColors]);

  const onColorClick = useCallback((color) => {
    setCurrentColor(color);
  }, [setCurrentColor]);

  const setSizesList = useCallback(async () => {
    const sizesList = await CommonService.getSizes();
    setSizes(sizesList);
  }, [setSizes]);

  const setCharacter = useCallback(async () => {
    const charactersList = await CommonService.getCharacters();
    if (charactersList.length) {
      setName(charactersList[0].name);
      setImage(charactersList[0].image);
      setPrice(charactersList[0].basePrice);
    }
  }, [setName, setImage, setPrice]);

  useEffect(() => {
    setCharacter();
    setColorsList();
    setSizesList();
    setCurrentSize(SHIRT_SIZES.medium);
    setGender('Man');
  }, []);

  return (
    <StyledShirtCard data-testid="shirt-card">
      <div className="main">
        <div className="shirt">
          <Shirt size={currentSize} color={currentColor} image={image} />
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

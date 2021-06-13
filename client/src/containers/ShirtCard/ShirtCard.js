import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { commonActions } from 'store/common/actions';
import { selectColors, selectSizes, selectCharacters, selectCurrentColor } from 'store/common/selectors';

import { Colors } from 'containers/Colors';
import { Sizes } from 'containers/Sizes';

import { Shirt, SHIRT_SIZES } from 'components/Shirt';
import { Price, PRICE_SIZES } from 'components/Price';
import { Button, BUTTON_TYPES } from 'components/Button';

import { THEME } from 'constants/theme';

import { StyledShirtCard } from './ShirtCard.style';

function ShirtCard() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState(0);

  const [currentSize, setCurrentSize] = useState(null);

  const colorsData = useSelector(selectColors, shallowEqual) || [];
  const colorsList = colorsData.map(item => {
    const currentColor = item.color;
    const themeColor = THEME.colorsMatching[currentColor];

    return themeColor || '';
  });

  const currentColor = useSelector(selectCurrentColor, shallowEqual) || '';

  const onColorClick = useCallback((color) => {
    dispatch(commonActions.updateCurrentColor(color));
  }, [dispatch]);

  const sizesData = useSelector(selectSizes, shallowEqual) || [];
  const sizesList = sizesData.map(item => {
    return item.size;
  });

  const charactersList = useSelector(selectCharacters, shallowEqual) || [];

  useEffect(() => {
    dispatch(commonActions.colorsReload());
    dispatch(commonActions.sizesReload());
    dispatch(commonActions.charactersReload());
    setCurrentSize(SHIRT_SIZES.medium);
    setGender('Man');
  }, [dispatch]);

  useEffect(() => {
    if (charactersList.length) {
      setName(charactersList[0].name);
      setImage(charactersList[0].image);
      setPrice(charactersList[0].basePrice);
    }
  }, [charactersList]);

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
            <Colors colors={colorsList} onClick={onColorClick} />
          </div>
          <div className="sizes">
            <div>Size</div>
            <Sizes sizes={sizesList} />
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

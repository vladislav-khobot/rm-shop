import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { commonActions } from 'store/common/actions';
import { selectColors, selectCurrentColor, selectCurrentImage, selectCurrentSize, selectSizes } from 'store/common/selectors';
import { TAB_TITLES } from 'constants/routes';

import { Shirt, SHIRT_SIZES } from 'components/Shirt';
import { Colors } from 'containers/Colors';
import { Sizes } from 'containers/Sizes';

import { Wrapper } from './Constructor.style';

function Constructor() {
  const colors = useSelector(selectColors);
  const sizes = useSelector(selectSizes);
  const color = useSelector(selectCurrentColor);
  const size = useSelector(selectCurrentSize);
  const image = useSelector(selectCurrentImage);

  const dispatch = useDispatch();
  const [currentColor, setCurrentColor] = useState('');
  const [currentSize, setCurrentSize] = useState('');

  const onColorChange = useCallback((color) => {
    setCurrentColor(color);
  }, [setCurrentColor]);

  const onSizeChange = useCallback((size) => {
    setCurrentSize(size);
  }, [setCurrentSize]);

  useEffect(() => {
    dispatch(commonActions.currentTabUpdate(TAB_TITLES.constructor));
    if (color) {
      setCurrentColor(color);
    }
    if (size) {
      setCurrentSize(size);
    }
  }, []);

  return (
    <Wrapper>
      <div className="details">
        <Shirt size={SHIRT_SIZES.large} color={color} image={image} />
        <div className="info">
          <div className="colors">
            <div>Colors</div>
            <Colors colors={colors} currentColor={currentColor} onColorChange={onColorChange} />
          </div>
          <div className="sizes">
            <div>Sizes</div>
            <Sizes sizes={sizes} currentSize={currentSize} onSizeChange={onSizeChange} />
          </div>
        </div>
      </div>
      <div className="footer">
        footer
      </div>
    </Wrapper>
  );
}

export { Constructor };

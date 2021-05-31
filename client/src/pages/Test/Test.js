import React, { useCallback, useState } from 'react';

import { THEME } from 'constants/theme';

import { TopBar } from 'containers/TopBar';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Colors } from 'containers/Colors';
import { Sizes } from 'containers/Sizes';
import { Price, PRICE_SIZES } from 'components/Price';
import { Shirt, SHIRT_SIZES } from 'components/Shirt';

import testImage from 'assets/images/test-print-image.png';

function Test() {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, [setInputValue]);

  return (
    <>
      <TopBar />
      <Logo />
      <Button>
        <span>test</span>
      </Button>
      <Input value={inputValue} placeholder="Type to search your T-shirt..." onChange={onInputChange} />
      <Colors
        colors={[THEME.colors.mainBlack, THEME.colors.mainBlue, THEME.colors.mainWhite, THEME.colors.mainGreen]}
      />
      <Sizes
        sizes={['S', 'M', 'L', 'XL', 'XXL', 'XXXL']}
      />
      <Price size={PRICE_SIZES.large} value={143.96} />
      <Shirt size={SHIRT_SIZES.large} color={THEME.colors.secondBlue} image={testImage} />
    </>
  );
}

export { Test };

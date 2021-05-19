import React, { useCallback, useState } from 'react';

import { THEME } from 'constants/theme';

import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Colors } from 'containers/Colors';
import { Sizes } from 'containers/Sizes';
import { Price, priceSizes } from 'components/Price';

function Test() {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, [setInputValue]);

  return (
    <>
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
      <Price size={priceSizes.large} value={143.96} />
    </>
  );
}

export { Test };

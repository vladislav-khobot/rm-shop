import React, { useCallback, useEffect, useState } from 'react';

import { THEME } from 'constants/theme';

import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Colors } from 'containers/Colors';

function Test() {
  const [inputValue, setInputValue] = useState('');
  const [activeColor, setActiveColor] = useState('');

  const onInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, [setInputValue]);

  const onChange = useCallback((event) => {
    setActiveColor(event.target.dataset.color);
  }, []);

  useEffect(() => {
    setActiveColor(THEME.colors.mainBlue);
  }, []);

  return (
    <>
      <Logo />
      <Button>
        <span>test</span>
      </Button>
      <Input value={inputValue} placeholder="Type to search your T-shirt..." onChange={onInputChange} />
      <Colors
        colors={[THEME.colors.mainBlack, THEME.colors.mainBlue, THEME.colors.mainWhite, THEME.colors.mainGreen]}
        active={activeColor}
        onChange={onChange}
      />
    </>
  );
}

export { Test };

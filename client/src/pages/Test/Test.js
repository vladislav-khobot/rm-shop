import React, { useState, useCallback } from 'react';

import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { Input } from 'components/Input';

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
    </>
  );
}

export { Test };

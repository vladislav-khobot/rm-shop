import React, { useCallback, useState } from 'react';

import { TopBar } from 'containers/TopBar';
import { Tabs } from 'containers/Tabs';
import { ShirtCard } from 'containers/ShirtCard';
import { Input } from 'components/Input';

function Test() {
  // const [inputValue, setInputValue] = useState('');

  // const onInputChange = useCallback((event) => {
  //   setInputValue(event.target.value);
  // }, [setInputValue]);

  return (
    <>
      <TopBar />
      <Tabs />
      <ShirtCard />
      {/* <Input value={inputValue} placeholder="Type to search your T-shirt..." onChange={onInputChange} /> */}
    </>
  );
}

export { Test };

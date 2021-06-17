import React from 'react';

import { ShirtCard } from 'containers/ShirtCard';
import { TopBar } from 'containers/TopBar';
import { Tabs } from 'containers/Tabs';

function Test() {

  return (
    <>
      <TopBar />
      <Tabs />
      <ShirtCard />
    </>
  );
}

export { Test };

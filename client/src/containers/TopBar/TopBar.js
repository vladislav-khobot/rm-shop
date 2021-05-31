import React from 'react';

import { Basket } from 'components/Basket';
import { User } from 'components/User';

import { StyledTopBar } from './TopBar.style';

function TopBar() {

  return (
    <StyledTopBar data-testid="topbar">
      <Basket productCount={5} />
      <User userName="Bill Compton" />
    </StyledTopBar>
  );
}

export { TopBar };

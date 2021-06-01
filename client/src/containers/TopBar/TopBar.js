import React from 'react';

import { Logo } from 'components/Logo';
import { Basket } from 'containers/TopBar/Basket';
import { User } from 'containers/TopBar/User';

import { StyledTopBar } from './TopBar.style';

function TopBar() {

  return (
    <StyledTopBar data-testid="topbar">
      <Logo />
      <div className="basket-user">
        <Basket />
        <User />
      </div>
    </StyledTopBar>
  );
}

export { TopBar };

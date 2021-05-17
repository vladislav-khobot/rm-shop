import React from 'react';

import { THEME } from 'constants/theme';

import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { Colors } from 'containers/Colors';

function Test() {
  return (
    <>
      <Logo />
      <Button>
        <span>test</span>
      </Button>
      <Colors colors={[THEME.colors.mainBlack, THEME.colors.mainBlue, THEME.colors.mainGreen]} />
    </>
  );
}

export { Test };

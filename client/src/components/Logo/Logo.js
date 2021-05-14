import React from 'react';

import { Wrapper } from 'components/Logo/Logo.style';

import logoImage from 'assets/images/logo-image.png';

function Logo() {

  return (
    <Wrapper>
      <img src={logoImage} alt="" />
      <div>Rick & Morty T-Shirts</div>
    </Wrapper>
  );
}

export { Logo };

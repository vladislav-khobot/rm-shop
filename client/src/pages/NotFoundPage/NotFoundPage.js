import React from 'react';

import image from 'assets/images/not-found-page.gif';

import { Wrapper } from './NotFoundPage.style';

function NotFoundPage() {
  return (
    <Wrapper>
      <img src={image} alt="404 page not found" />
    </Wrapper>
  );
}

export { NotFoundPage };

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { commonActions } from 'store/common/actions';
import image from 'assets/images/not-found-page.gif';

import { Wrapper } from './NotFoundPage.style';

function NotFoundPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.updateCurrentTab('Gallery'));
  }, []);

  return (
    <Wrapper>
      <img src={image} alt="404 page not found" />
    </Wrapper>
  );
}

export { NotFoundPage };

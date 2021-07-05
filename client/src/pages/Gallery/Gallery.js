import { React, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { selectGallery } from 'store/common/selectors';

import { ShirtCard } from 'containers/ShirtCard';
import { commonActions } from 'store/common/actions';
import { TAB_TITLES } from 'constants/routes';

import { Wrapper } from 'pages/Gallery/Gallery.style';

function Gallery() {
  const galleryData = useSelector(selectGallery, shallowEqual) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.currentTabUpdate(TAB_TITLES.gallery));
  }, []);

  return (
    <Wrapper>
      {galleryData.map(item => {
        const { character } = item;
        const { id } = character;
        return (
          <ShirtCard key={id} {...item} {...character} />
        );
      })}
    </Wrapper>
  );
}

export { Gallery };

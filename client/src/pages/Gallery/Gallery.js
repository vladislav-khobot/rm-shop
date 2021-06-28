import { React } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { selectGallery } from 'store/common/selectors';

import { ShirtCard } from 'containers/ShirtCard';

import { Wrapper } from 'pages/Gallery/Gallery.style';

function Gallery() {
  const galleryData = useSelector(selectGallery, shallowEqual) || [];

  return (
    <Wrapper>
      {galleryData.map((item, index) => {
        return (
          <ShirtCard key={index} />
        );
      })}
    </Wrapper>
  );
}

export { Gallery };

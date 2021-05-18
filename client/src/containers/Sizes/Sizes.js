import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Size } from 'components/Size';
import { StyledSizes } from './Sizes.style';

function Sizes(props) {
  const { sizes } = props;
  const [currentSize, setCurrentSize] = useState('');

  const onClick = useCallback((size) => {
    setCurrentSize(size);
  }, [setCurrentSize]);

  useEffect(() => {
    setCurrentSize('S');
  }, []);

  return (
    <StyledSizes data-testid="sizes">
      {sizes.map(size => <Size key={size} size={size} active={size === currentSize} onClick={onClick} />)}
    </StyledSizes>
  );
}

Sizes.propTypes = {
  sizes: PropTypes.array,
};

Sizes.defaultProps = {
  sizes: [],
};

export { Sizes };

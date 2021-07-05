import React from 'react';
import PropTypes from 'prop-types';

import { Size } from 'components/Size';
import { StyledSizes } from './Sizes.style';

function Sizes(props) {
  const { sizes, currentSize, onSizeChange } = props;

  return (
    <StyledSizes data-testid="sizes">
      {sizes.map(size => <Size key={size} size={size} active={size === currentSize} onClick={onSizeChange} />)}
    </StyledSizes>
  );
}

Sizes.propTypes = {
  sizes: PropTypes.array,
  currentSize: PropTypes.string,
  onSizeChange: PropTypes.func,
};

Sizes.defaultProps = {
  sizes: [],
  currentSize: '',
  onSizeChange: () => {},
};

export { Sizes };

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { StyledSize } from './Size.style';

function Size(props) {
  const { size, active, onClick } = props;

  const className = clsx({
    active,
  });

  const onSizeClick = useCallback(() => {
    onClick(size);
  }, [size, onClick]);

  return (
    <StyledSize data-testid="size" className={className} onClick={onSizeClick}>
      {size}
    </StyledSize>
  );
}

Size.propTypes = {
  size: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Size.defaultProps = {
  size: '',
  active: false,
  onClick: () => {},
};

export { Size };

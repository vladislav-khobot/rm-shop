import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { StyledTab } from './Tab.style';

function Tab(props) {
  const { caption, active, onClick } = props;

  const className = clsx({
    active,
  });

  const onTabClick = useCallback(() => {
    onClick(caption);
  }, [caption, onClick]);

  return (
    <StyledTab className={className} onClick={onTabClick} data-testid="tab">
      {caption}
    </StyledTab>
  );
}

Tab.propTypes = {
  caption: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  caption: '',
  active: false,
  onClick: () => {},
};

export { Tab };

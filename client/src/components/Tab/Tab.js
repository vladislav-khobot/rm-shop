import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { ROUTES } from 'constants/routes';
import { StyledTab } from './Tab.style';

function Tab(props) {
  const { caption, active, onClick, type } = props;

  const className = clsx({
    active,
  });

  const onTabClick = useCallback(() => {
    onClick(caption);
  }, [caption, onClick]);

  return (
    <NavLink to={ROUTES[type]}>
      <StyledTab className={className} onClick={onTabClick} data-testid="tab">
        {caption}
      </StyledTab>
    </NavLink>
  );
}

Tab.propTypes = {
  caption: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Tab.defaultProps = {
  caption: '',
  active: false,
  onClick: () => {},
  type: '',
};

export { Tab };

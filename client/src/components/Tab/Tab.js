import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { StyledTab } from './Tab.style';

function Tab(props) {
  const { caption, active, onClick, exact, to } = props;

  const className = clsx({
    active,
  });

  const onTabClick = useCallback(() => {
    onClick(caption);
  }, [caption, onClick]);

  return (
    <NavLink to={to} exact={exact}>
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
  exact: PropTypes.bool,
  to: PropTypes.string,
};

Tab.defaultProps = {
  caption: '',
  active: false,
  onClick: () => {},
  exact: false,
  to: '',
};

export { Tab };

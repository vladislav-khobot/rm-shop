import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Button.style';

function Button(props) {
  const { type, name, onClick, children } = props;

  return (
    <Wrapper>
      <button type={type} onClick={onClick}>
        {name}
      </button>
    </Wrapper>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

Button.defaultProps = {
  type: '',
  name: '',
  onClick: () => {},
  children: undefined,
};

export { Button };

import React from 'react';
import PropTypes from 'prop-types';

import { StyledUser } from './User.style';

import defaultImage from './User.png';

function User(props) {
  const { userName, userImage } = props;

  return (
    <StyledUser data-testid="user">
      <img src={userImage} alt="" />
      <div>{userName}</div>
    </StyledUser>
  );
}

User.propTypes = {
  userName: PropTypes.string,
  userImage: PropTypes.string,
};

User.defaultProps = {
  userName: '',
  userImage: defaultImage,
};

export { User };

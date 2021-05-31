import React, { useEffect, useState } from 'react';

import { StyledUser } from './User.style';

import defaultImage from './User.png';

function User() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    setName('Tom Hardy');
    setAvatar(defaultImage);
  }, []);

  return (
    <StyledUser data-testid="user">
      <img src={avatar} alt="" />
      <div>{name}</div>
    </StyledUser>
  );
}

export { User };

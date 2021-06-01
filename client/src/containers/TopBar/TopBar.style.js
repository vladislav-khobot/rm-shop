import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10rem;
  background-color: ${THEME.bg.header};

  .basket-user {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

`;

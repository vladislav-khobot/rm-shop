import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > img {
    padding: 1rem;
  };

  & > div {
    color: ${THEME.text.head};
    cursor: pointer;
  };
`;

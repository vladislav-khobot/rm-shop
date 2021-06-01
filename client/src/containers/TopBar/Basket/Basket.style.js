import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledBasket = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-right: 2.25rem;

  .svg {
    padding: 1rem;
  };

  & > div {
    color: ${THEME.text.head};
    cursor: pointer;
  };
`;

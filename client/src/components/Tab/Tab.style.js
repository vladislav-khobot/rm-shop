import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledTab = styled.div`
  display: inline-block;
  text-align: center;
  cursor: pointer;

  margin: 1rem 1.5rem;
  color: ${THEME.colors.secondBlack};
  font-size: 1.25rem;

  width: 8rem;

  &.active {
    color: ${THEME.colors.mainBlue};
    border-bottom: 3px solid ${THEME.colors.mainBlue};
    padding-bottom: 0.85rem;
  };
`;

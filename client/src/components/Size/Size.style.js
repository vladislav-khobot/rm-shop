import { THEME } from 'constants/theme';
import styled from 'styled-components';

export const StyledSize = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  color: ${THEME.text.main};
  margin: 0 0.5rem 0 0.5rem;
  cursor: default;

  &.active {
    font-weight: 500;
    color: ${THEME.colors.mainBlue};
  }
`;

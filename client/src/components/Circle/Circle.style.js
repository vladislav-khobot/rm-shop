import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledCircle = styled.div`
  border: 1px solid;
  border-color: ${props => props.color};
  border-radius: 50px;
  background-color: ${props => props.color};
  width: 0.9rem;
  height: 0.9rem;
  margin: 0.5rem 0.35rem;

  &.white {
    border-color: ${THEME.colors.mainBlack};
  }

  &.active {
    width: 1.4rem;
    height: 1.4rem;
  }

`;

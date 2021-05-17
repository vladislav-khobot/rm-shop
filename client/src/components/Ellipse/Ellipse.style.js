import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledEllipse = styled.div`
  border: 1px solid;
  border-color: ${props => props.color === THEME.colors.mainWhite ? `${THEME.colors.mainBlack}` : `${props.color}`};
  border-radius: 50px;
  background-color: ${props => props.color};
  width: ${props => props.active === props.color ? '1.4rem' : '0.9rem'};
  height: ${props => props.active === props.color ? '1.4rem' : '0.9rem'};
  margin: 0.5rem 0.35rem;
`;

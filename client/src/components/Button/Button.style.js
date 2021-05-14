import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledButton = styled.button`
  background: ${THEME.bg.button};
  padding: 0.75rem 1.75rem;
  box-sizing: border-box;
  border-color: ${THEME.bg.button};
  border-radius: 0.25rem;
  outline: none;
  color: ${THEME.text.button};
  font-size: 1rem;
`;

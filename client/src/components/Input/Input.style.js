import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledInput = styled.input`
  border: 1px solid ${THEME.border.input};
  border-radius: 4px;
  color: ${THEME.text.input};
  background-color: ${THEME.bg.input};
  padding: 0.85rem 1rem;
  margin: 0.75rem;
  outline: none;
`;

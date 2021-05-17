import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledButton = styled.button`

  padding: 0.75rem 1.75rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  outline: none;
  font-size: 1rem;

  &.default {
    background: ${THEME.bg.button.default};
    border-color: ${THEME.bg.button.default};
    color: ${THEME.text.button.default};
  }

  &.primary {
    background: ${THEME.bg.button.primary};
    border-color: ${THEME.bg.button.primary};
    color: ${THEME.text.button.primary};
  }
`;

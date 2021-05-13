import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const Wrapper = styled.div`
  button {
    background: ${THEME.bg.button};
    padding: 12px 28px;
    box-sizing: border-box;
    border-color: ${THEME.bg.button};
    border-radius: 4px;
    outline: none;
    color: ${THEME.text.button};
    font-size: 14px;
  }
`;

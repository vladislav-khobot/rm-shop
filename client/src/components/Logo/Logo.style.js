import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px 0;

  img {
    margin: 0 10px;
  }

  div {
    margin: 8px 10px;
    padding-top: 4px;
    color: ${THEME.text.head};
    font-size: 24px;
    line-height: 28px;
  }
`;

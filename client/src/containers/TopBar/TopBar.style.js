import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledTopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 10rem;
  background-color: ${THEME.bg.header};
`;

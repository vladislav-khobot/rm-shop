import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.5rem;
  color: ${THEME.text.main};
  font-weight: normal;

  .medium-int-part {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  .large-int-part {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.3rem;
  }

  .medium-double-part {
    font-size: 0.9rem;
    line-height: 0.7rem;
    margin-left: 0.5rem;
  }

  .large-double-part {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-left: 0.5rem;
  }
`;

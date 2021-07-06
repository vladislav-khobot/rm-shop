import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const Wrapper = styled.div`
  background-color: ${THEME.colors.mainWhite};

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  margin: 5.38rem 10rem 1.88rem 10rem;
  padding: 5.25rem 6.63rem 4.38rem 5.5rem;

  .details {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    flex-grow: 10;

    .info {

      .colors {
        display: flex;
      }

      .sizes {

      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-grow: 1;
  }
`;

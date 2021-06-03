import styled from 'styled-components';

import { THEME } from 'constants/theme';

export const StyledShirtCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${THEME.bg.shirtCard};
  border: 1px solid ${THEME.border.shirtCard};
  box-sizing: border-box;
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;

  margin: 1rem 10rem;
  cursor: default;

  .main {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .shirt {
      margin: 2.75rem 0 2.75rem 2.75rem;
    }

    .info {
      display: flex;
      flex-direction: column;

      & > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        padding: 0.5rem;
      }

      .name {
        font-size: 1.5rem;
        padding-bottom: 2rem;
      }

      .colors {
        padding-bottom: 0;
        & > div {
          margin-right: 1.5rem;
        }
      }

      .sizes {
        & > div {
          margin-right: 2rem;
        }
      }

      .gender {
        & > div {
          margin-right: 1rem;
        }
      }
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    margin: 2.7rem 3rem;

    & > div {
      padding-bottom: 6.25rem;
    }
  }
`;

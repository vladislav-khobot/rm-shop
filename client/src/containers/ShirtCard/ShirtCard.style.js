import { THEME } from 'constants/theme';
import styled from 'styled-components';

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

  .left {
    flex-grow: 2;
  }

  .middle {
    flex-grow: 6;

    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      padding: 1rem;
    }

    .name {
      font-size: 1.5rem;
    }

    .colors {

    }

    .gender {

    }
  }

  .right {
    flex-grow: 2;
  }
`;

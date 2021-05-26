import styled from 'styled-components';

export const StyledShirt = styled.div`
  margin: 8px;

  &.small {
    .svg {
      width: 8.5rem;
      height: 6.5rem;
    };

    img {
      width: 2.5rem;
      height: 2.5rem;

      position: relative;
      left: -5.5rem;
      top: -2.7rem;
    }
  };

  &.medium {
    .svg {
      width: 13.5rem;
      height: 11rem;
    };

    img {
      width: 3.75rem;
      height: 3.75rem;

      position: relative;
      left: -8.65rem;
      top: -5rem;
    }
  };

  &.large {
    .svg {
      width: 25rem;
      height: 20rem;
    };

    img {
      width: 7.5rem;
      height: 7.5rem;

      position: relative;
      left: -16.25rem;
      top: -8rem;
    }
  };
`;

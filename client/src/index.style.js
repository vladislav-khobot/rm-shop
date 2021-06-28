import { createGlobalStyle } from 'styled-components';

import backgroundImage from 'assets/images/background-image.png';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    font-family: 'Rubik', sans-serif;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;

    position: fixed;
  }
`;

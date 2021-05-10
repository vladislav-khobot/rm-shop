import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle } from 'styled-components';

import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';

import backgroundImage from './assets/images/background-image.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

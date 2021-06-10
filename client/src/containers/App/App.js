import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'store/store';

import { Test } from 'pages/Test';

function App() {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
}

export default App;

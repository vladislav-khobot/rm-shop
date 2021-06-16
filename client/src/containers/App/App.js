import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import { commonActions } from 'store/common/actions';

import { Test } from 'pages/Test';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.colorsReload());
    dispatch(commonActions.sizesReload());
    dispatch(commonActions.charactersReload());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Test />
    </BrowserRouter>
  );
}

export default App;

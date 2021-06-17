import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { commonActions } from 'store/common/actions';
import { ROUTES } from 'constants/routes';

import { Test } from 'pages/Test';
import { NotFoundPage } from 'pages/NotFoundPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.colorsReload());
    dispatch(commonActions.sizesReload());
    dispatch(commonActions.charactersReload());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.home.route} component={Test} />
        <Route exact path={ROUTES.gallery.route} component={Test} />
        <Route exact path={ROUTES.incorrect.route} component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

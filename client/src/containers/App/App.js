import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { commonActions } from 'store/common/actions';
import { ROUTES } from 'constants/routes';

import { TopBar } from 'containers/TopBar';
import { Tabs } from 'containers/Tabs';

import { Gallery } from 'pages/Gallery';
import { NotFoundPage } from 'pages/NotFoundPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.galleryReload());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <TopBar />
      <Tabs />
      <Switch>
        <Route exact path={ROUTES.home} component={Gallery} />
        <Route exact path={ROUTES.gallery} component={Gallery} />
        <Route exact path={ROUTES.incorrect} component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

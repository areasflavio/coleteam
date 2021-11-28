import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/create-point" component={CreatePoint} />
    </BrowserRouter>
  );
};

export default Routes;

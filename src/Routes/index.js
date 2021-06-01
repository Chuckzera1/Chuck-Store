import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Store from 'pages/Store';
import Cart from 'pages/Cart';

function Routes() {
  return (
    <Switch>
      {/* <Route path="/store" component={Store} /> */}
      <Route path="/cart" component={Cart} />
      <Route path="/" exact component={Store} />
    </Switch>
  );
}

export default Routes;

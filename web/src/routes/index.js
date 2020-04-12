import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Servicos from '~/pages/Servicos';
import Contato from '~/pages/Contato';
import Login from '~/pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/contato" component={Contato} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ROUTES } from './routes';
import Home from './screens/Home';
import Properties from './screens/Properties';
import Valuator from './screens/Valuator';

import './styles.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.PROPERTIES} component={Properties} />
          <Route exact path={ROUTES.VALUATOR} component={Valuator} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

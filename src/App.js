import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { routeCodes } from './Routes/routesConfig';
import Home from './js/components/Home/Home';

export default function App() {
    return (
              <Switch>
                  <Route exact path={routeCodes.HOMEPAGE} component={Home} />
              </Switch>
    )
  }
  
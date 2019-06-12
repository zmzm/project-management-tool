import * as React from 'react';
import { Switch } from 'react-router-dom';
import { TopNavigation } from '../components/TopNavigation/TopNavigation';
import { URLS } from '../consts/urls';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import Home from './Home';
import Board from './Board';

export default class Authorized extends React.Component {
  public render() {
    return (
      <div>
        <TopNavigation />
        <main>
          <Switch>
            <PrivateRoute path={URLS.BOARD} component={Board} />
            <PrivateRoute path={URLS.HOME} component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

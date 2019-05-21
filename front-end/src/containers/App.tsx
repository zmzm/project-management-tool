import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { URLS } from '../consts/urls';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

export default class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact path={URLS.INDEX} component={Home} />
        <Route path={URLS.SIGN_IN} component={SignIn} />
        <Route path={URLS.SIGN_UP} component={SignUp} />
      </Switch>
    );
  }
}

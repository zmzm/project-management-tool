import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { URLS } from '../consts/urls';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Authorized from './Authorized';

export default class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path={URLS.SIGN_IN} component={SignIn} />
        <Route path={URLS.SIGN_UP} component={SignUp} />
        <PrivateRoute path={URLS.INDEX} component={Authorized} />
      </Switch>
    );
  }
}

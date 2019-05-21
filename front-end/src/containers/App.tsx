import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    );
  }
}

import * as React from 'react';
import { Redirect, Route } from 'react-router';
import { URLS } from '../../../consts/urls';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('authToken') ? (
        <Component {...props} />
      ) : (
        <Redirect to={URLS.INDEX} />
      )
    }
  />
);

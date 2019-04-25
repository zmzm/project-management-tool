import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from 'emotion-theming';

import registerServiceWorker from './utils/register-service-worker';
import './utils/add-icons-to-lib';
import theme from './themes/default';
import SignIn from './containers/SignIn';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { globalCss } from './themes/global';

globalCss();

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();

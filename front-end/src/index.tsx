import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from 'emotion-theming';

import App from './containers/App';
import registerServiceWorker from './utils/register-service-worker';
import './utils/add-icons-to-lib';
import theme from './themes/default';
import { globalCss } from './themes/global';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

globalCss();

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();

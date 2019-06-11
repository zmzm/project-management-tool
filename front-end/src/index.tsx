import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from 'emotion-theming';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import registerServiceWorker from './utils/register-service-worker';
import './utils/add-icons-to-lib';
import theme from './styles/default';
import { globalCss } from './styles/global';

globalCss();

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
registerServiceWorker();

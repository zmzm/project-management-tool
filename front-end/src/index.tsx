import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from 'emotion-theming';

import App from './containers/App';
import registerServiceWorker from './utils/register-service-worker';
import './utils/add-icons-to-lib';
import theme from './themes/default';
import { globalCss } from './themes/global';

globalCss();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();

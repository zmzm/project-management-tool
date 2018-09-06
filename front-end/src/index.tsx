import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ThemeWrapper from './components/ThemeWrapper';
import App from './components/App';
import registerServiceWorker from './utils/register-service-worker';
import injectGlobalStyles from './utils/inject-global-styles';
import './utils/add-icons-to-lib';

injectGlobalStyles();

ReactDOM.render(
  <ThemeWrapper>
    <App />
  </ThemeWrapper>,
  document.getElementById('root'),
);
registerServiceWorker();

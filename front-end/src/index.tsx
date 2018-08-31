import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ThemeWrapper from './components/ThemeWrapper';
import App from './components/App';
import registerServiceWorker from './register-service-worker';
import injectGlobalStyles from './inject-global-styles';

injectGlobalStyles();

ReactDOM.render(
  <ThemeWrapper>
    <App />
  </ThemeWrapper>,
  document.getElementById('root'),
);
registerServiceWorker();

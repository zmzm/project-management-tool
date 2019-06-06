import * as React from 'react';

import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/default';
import { globalCss } from '../styles/global';

globalCss();

const themeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default themeProvider;

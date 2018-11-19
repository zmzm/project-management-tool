import * as React from 'react';

import { ThemeProvider } from 'emotion-theming';
import theme from '../themes/default';
import { globalCss } from '../themes/global';

globalCss();

const themeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{ children }</ThemeProvider>
);

export default themeProvider;

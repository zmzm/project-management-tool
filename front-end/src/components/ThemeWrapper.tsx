import * as React from 'react';
import { ThemeProvider } from '../libs/styled-components-with-them-anotation';
import theme from '../themes/default';

interface IThemeWrapper {
  children: React.ReactChild;
}

const ThemeWrapper: React.SFC<IThemeWrapper> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;

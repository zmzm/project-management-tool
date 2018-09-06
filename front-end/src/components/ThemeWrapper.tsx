import * as React from 'react';
import { ThemeProvider } from '../libs/styled-components-with-theme-anotation';
import theme from '../themes/default';

const ThemeWrapper: React.SFC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;

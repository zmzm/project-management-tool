import { injectGlobal } from '.';

const injectGlobalStyles = (): void => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  * {
    font-family: 'Roboto', sans-serif;
  }
`;

export default injectGlobalStyles;

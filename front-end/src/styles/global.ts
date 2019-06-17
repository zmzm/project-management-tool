import { injectGlobal } from 'emotion';

import materialIconsRegularWoff2 from '../assets/fonts/MaterialIcons-Regular.woff2';
import materialIconsRegularWoff from '../assets/fonts/MaterialIcons-Regular.woff';
import materialIconsRegularWoTtf from '../assets/fonts/MaterialIcons-Regular.ttf';

export const globalCss = () => injectGlobal`
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: 
      url('${materialIconsRegularWoff2}') format('woff2'),
      url('${materialIconsRegularWoff}') format('woff'),
      url('${materialIconsRegularWoTtf}') format('truetype');
  }

  .rsg--para-33 {
    font-size: 18px; 
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
  
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
  
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
  
    /* Support for IE. */
    font-feature-settings: 'liga';
  }

  html, body, #root {
    margin:0;
    font-size: 62.5%;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: rgb(0, 121, 191);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }
`;

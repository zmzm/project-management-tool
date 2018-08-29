import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import ITheme from './themes/theme-interface';

// by defalut theme prop set to any type, code below set custom type for theme
const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export {
  css, injectGlobal, keyframes, ThemeProvider,
};
export default styled;

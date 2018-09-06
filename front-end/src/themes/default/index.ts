import ITheme from '../theme-interface';
import colors from './colors';

const {
  black,
  blueDark,
  blueLight,
  grayLight,
  primary,
  redDark,
  rgbWhite,
  secondary,
} = colors;

const defaultTheme: ITheme = {
  buttons: {
    alert: {
      bg: redDark,
      border: grayLight,
      text: grayLight,
    },
    primary: {
      bg: primary,
      border: grayLight,
      text: grayLight,
    },
    regular: {
      bg: grayLight,
      border: black,
      text: black,
    },
  },
  colors: {
    primary: grayLight,
    secondary: black,
  },
  modalWindow: {
    // modal window background set through rgba property, so it's needed to use rgb color(it
    // looks like the most convinient way to set opacity)
    color: rgbWhite,
    opacity: '0.7',
  },
  spinner: {
    bg: blueLight,
    roller: blueDark,
    stub: secondary,
  },
};

export default defaultTheme;

import colors from './colors';

const {
  black,
  blueDark,
  blueLight,
  grayLight,
  gray,
  primary,
  rgbWhite,
  secondary,
} = colors;

const defaultTheme = {
  body: {
    default: primary,
  },
  button: {
    background: {
      default: grayLight,
      outline: 'transparent',
      transparent: 'transparent', 
    },
    hover: {
      default: gray,
      outline: blueDark,
      transparent: 'rgba(9,45,66,.13)',
    },
  },
  colors: {
    primary: grayLight,
    secondary: black,
  },
  header: {
    background: {
      default: blueDark,
      transparent: 'transparent', 
    },
  },
  input: {
    default: {
      bg: '#ffffff',
      border: '2px solid palevioletred',
      textColor: '#000000',
    },
    inverted: {
      bg: 'palevioletred',
      border: '2px solid palevioletred',
      textColor: '#ffffff',
    },
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

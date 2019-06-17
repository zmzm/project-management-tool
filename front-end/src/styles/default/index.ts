import colors from './colors';

const {
  black,
  blueDark,
  blueLight,
  grayLight,
  gray,
  strongBlue,
  white,
} = colors;

const defaultTheme = {
  body: {
    default: strongBlue,
  },
  button: {
    background: {
      default: grayLight,
      disabled: '#868686',
      outline: 'transparent',
      transparent: 'transparent',
    },
    hover: {
      default: gray,
      disabled: '#868686',
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
      bg: gray,
      textColor: black,
    },
    inverted: {
      bg: 'palevioletred',
      border: '2px solid palevioletred',
      textColor: white,
    },
  },
  modalWindow: {
    // modal window background set through rgba property, so it's needed to use rgb color(it
    // looks like the most convinient way to set opacity)
    color: white,
    opacity: '0.7',
  },
  spinner: {
    bg: blueLight,
    roller: blueDark,
    stub: white,
  },
};

export default defaultTheme;

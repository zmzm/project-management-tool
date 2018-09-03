import ITheme from './theme-interface';

const defaultTheme: ITheme = {
  buttons: {
    alert: {
      bg: '#b70a0a',
      border: '#f7f7f7',
      text: '#f7f7f7',
    },
    primary: {
      bg: '#075db3',
      border: '#f7f7f7',
      text: '#f7f7f7',
    },
    regular: {
      bg: '#f7f7f7',
      border: 'black',
      text: 'black',
    },
  },
  colors: {
    primary: '#f7f7f7',
    secondary: 'black',
  },
  modalWindow: {
    // modal window background set through rgba property, so it's needed to use rgb color(it
    // looks like the most convinient way to set opacity)
    color: '255, 255, 255',
    opacity: '0.7',
  },
};

export default defaultTheme;

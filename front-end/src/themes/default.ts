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
};

export default defaultTheme;

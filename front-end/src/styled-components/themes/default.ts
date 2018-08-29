import ITheme from './theme-interface';

const defaultTheme: ITheme = {
  buttons: {
    alert: {
      bg: '#b70a0a',
      text: '#f7f7f7',
    },
    primary: {
      bg: '#075db3',
      text: '#f7f7f7',
    },
    regular: {
      bg: '#f7f7f7',
      text: 'black',
    },
  },
  colors: {
    primary: '#f7f7f7',
    secondary: 'black',
  },
};

export default defaultTheme;

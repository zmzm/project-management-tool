interface IButtonThemeColors {
  bg: string,
  border: string,
  text: string,
}

interface ITheme {
  buttons: {
    alert: IButtonThemeColors,
    primary: IButtonThemeColors,
    regular: IButtonThemeColors,
  },
  colors: {
    primary: string,
    secondary: string,
  },
  modalWindow: {
    color: string,
    opacity: string,
  },
}

export default ITheme;

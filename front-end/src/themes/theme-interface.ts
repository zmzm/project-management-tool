interface IButtonThemeColors {
  bg: string,
  border: string,
  text: string,
}

interface IInputThemeColors {
  bg: string,
  border: string,
  textColor: string,
}

interface ITheme {
  buttons: {
    alert: IButtonThemeColors,
    primary: IButtonThemeColors,
    regular: IButtonThemeColors,
  },
  input: {
    default: IInputThemeColors,
    inverted: IInputThemeColors,
  },
  colors: {
    primary: string,
    secondary: string,
  },
  modalWindow: {
    color: string,
    opacity: string,
  },
  spinner: {
    bg: string,
    roller: string,
    stub: string,
  },
}

export default ITheme;

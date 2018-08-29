interface IButton {
  bg: string,
  text: string,
}

interface ICollors {
  primary: string,
  secondary: string,
}

interface ITheme {
  buttons: {
    alert: IButton,
    primary: IButton,
    regular: IButton,
  },
  colors: ICollors,
}

export default ITheme;

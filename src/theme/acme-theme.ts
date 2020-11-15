import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F857A6',
      
    },
    secondary: {
        main: "#FF5858"
    },
    text: {
        primary: "#403E45",
        secondary: "#FFF"
    },
  },
  typography: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 18
  },
  overrides: {
    MuiTextField: {
      root: {
        background: "#F7F4F5"
      }
    }
  }
});
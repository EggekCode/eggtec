import { createMuiTheme } from "@material-ui/core";

const stepper = createMuiTheme({
  palette: {
    primary: {
      main: '#5268F4',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#7C7D7F',
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
  },
});

export default stepper;
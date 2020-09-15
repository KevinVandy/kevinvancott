import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      secondary: {
        main: '#e6d412'
      },
      primary: {
        main: '#0375b9'
      }
    },
    typography: {
      h1: {
        fontSize: '3rem'
      },
      h2: {
        fontSize: '2rem'
      },
      h3: {
        fontSize: '1.4rem'
      },
      h4: {
        fontSize: '1.3rem'
      },
      h5: {
        fontSize: '1.2rem'
      },
      h6: {
        fontSize: '1.1rem'
      }
    },
    overrides: {
      MuiTooltip: {
        tooltip: {
          fontSize: '1em'
        }
      }
    }
  })
);

export default theme;

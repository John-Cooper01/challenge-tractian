import { createTheme } from '@mui/material/styles';
import { red,grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#3399ff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#46505A',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#021f36',
    },
  },    
});

export default theme;
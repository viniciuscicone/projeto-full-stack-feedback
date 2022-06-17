import { createTheme } from "@mui/material";
import { orange, grey, white, black } from "./color";
 
export const themeMAIN = createTheme({
  palette: {
    primary: {
      main: '#001e3c',
    
      last: '#61dafb'
    },
    background: {
      default: "#001a1c"
    },
    secondary: {
      main: orange,
    },
    drawer: {
      default: orange,
    },
    backDrop: {
      main: orange,
      contrastText: orange,
    },
    success: {
      main: orange,
    },
  }
});
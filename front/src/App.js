import React from "react";
import { Router } from "./routes/Router"
import { ThemeProvider } from "@mui/material";
import { themeMAIN } from './theme/theme'
import GlobalState from './global/globalState';


const App = () => {
  return (
    <ThemeProvider theme={themeMAIN} >
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;

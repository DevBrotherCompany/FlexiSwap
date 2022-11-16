import React from "react";
import "./App.css";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

import { darkTheme } from "styles/theme";
import { AppLayout } from "shared/AppLayout/AppLayout";

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppLayout />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

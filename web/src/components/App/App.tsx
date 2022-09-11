import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme } from "styles/theme";
import { AppLayout } from "shared/AppLayout/AppLayout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;

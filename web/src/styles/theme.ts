import { createTheme } from "@mui/material";

const commonTheme = {
  typography: {
    fontFamily: ["Roboto", "Nunito Sans", "Sen"].join(", "),
    // h1: {
    //   fontSize: '30px',
    //   fontWeight: 600,
    //   lineHeight: '40px',
    // },
  },
};

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    // mode: "dark",
    primary: {
      main: "#F39C12",
    },
    secondary: {
      main: "#F39C12",
    },
    background: {
      default: "#F39C12",
      paper: "#F39C12",
    },
    error: {
      main: "#F39C12",
    },
    text: {
      primary: "rgba(20,19,19,0.87)",
      secondary: "rgba(28,24,24,0.54)",
    },
  },
});

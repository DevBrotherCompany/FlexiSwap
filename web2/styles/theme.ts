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
    mode: "dark",
    primary: {
      main: "#F39C12",
      contrastText: "#FDFFF9",
    },
    secondary: {
      main: "#2F3237",
      contrastText: "#D9D9D9",
    },
    background: {
      default: "#0F1011",
      paper: "#2B2C31",
    },
    error: {
      main: "#F39C12",
    },
    text: {
      primary: "#D9D9D9",
      secondary: "rgba(28,24,24,0.54)",
    },
  },
});

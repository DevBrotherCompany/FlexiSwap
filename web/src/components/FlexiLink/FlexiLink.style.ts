import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useFlexiLinkStyles = makeStyles((theme: Theme) => ({
  buttonBase: {
    width: "100%",
    textAlign: "left",
    borderRadius: "6px !important",
    color: theme.palette.text.primary,
    // "& .active": { backgroundColor: "#2B2C31" },
    // "&:hover": {
    //   color: theme.palette.primary.main,
    // },
  },
  activeButtonBase: { backgroundColor: "#2B2C31 !important" },
  link: {
    padding: "10px 15px",
    width: "100%",
    color: `${theme.palette.text.primary} !important`,
    textDecoration: "none !important",
    transition: ".3s all",
    "&:hover": {
      color: `${theme.palette.primary.main} !important`,
    },
  },
  active: {
    color: `${theme.palette.primary.main} !important`,
  },
}));

import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useFlexiInputStyles = makeStyles((theme: Theme) => ({
  input: {
    padding: "12px 20px !important",
    backgroundColor: `${theme.palette.background.paper} !important`,
    border: "none !important",
  },
}));

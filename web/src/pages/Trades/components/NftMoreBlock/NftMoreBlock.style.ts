import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { Style } from "styles/variables";

export const useNftMoreBlockStyles = makeStyles((theme: Theme) => ({
  block: {
    width: "100px",
    height: "100px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: Style.additionalBackground,
    borderRadius: "6px",
  },
  text: {
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "45px",
    color: theme.palette.background.paper,
  },
}));

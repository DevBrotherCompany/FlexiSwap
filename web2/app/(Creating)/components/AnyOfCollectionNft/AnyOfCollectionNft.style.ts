import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useAnyOfCollectionNftStyles = makeStyles((theme: Theme) => ({
  item: {
    backgroundColor: theme.palette.secondary.main,
    textAlign: "center",
    width: "100px",
    height: "100px",
    borderRadius: "6px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.palette.secondary.contrastText,
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "30px",
  },
}));

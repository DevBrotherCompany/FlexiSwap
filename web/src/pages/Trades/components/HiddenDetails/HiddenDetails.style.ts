import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useHiddenDetailsStyles = makeStyles((theme: Theme) => ({
  listItem: {
    display: "grid",
    gridTemplateColumns: "minmax(540px, 4fr) 1fr 4fr",
    marginBottom: "20px !important",
  },
}));

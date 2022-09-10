import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useSidebarStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    backgroundColor: `${theme.palette.background.default} !important`,
    minWidth: "280px",
    padding: "30px 20px 50px 20px",
    position: "relative",
  },
  logo: { marginBottom: "30px !important" },
}));

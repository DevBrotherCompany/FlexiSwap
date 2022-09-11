import { makeStyles } from "@mui/styles";
import { sidebarWidth } from "components/Sidebar/Sidebar.style";
import { Theme } from "@mui/material/styles";

export const headerHeight = 64;

export const useTradesSidebarStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    paddingLeft: `${sidebarWidth + 10}px`,
    paddingTop: `${headerHeight + 22}px`,
  },
  appbar: {
    paddingLeft: `${sidebarWidth}px`,
    backgroundColor: `${theme.palette.background.default} !important`,
    backgroundImage: "none !important",
    borderBottom: "1px solid #696161",
    opacity: ".6",
  },
  subtitle: { marginTop: "30px !important" },
  connectWrapper: {
    position: "fixed",
    bottom: "50px",
  },
  connect: { width: "100% !important" },
}));

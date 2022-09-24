import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

import { Style } from "shared/variables";
import { sidebarWidth } from "components/Sidebar/Sidebar.style";

export const headerHeight = 103;

export const useTradesSidebarStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    paddingLeft: `${sidebarWidth + 45}px`,
    paddingTop: `${headerHeight + 22}px`,
    paddingRight: "22px",
  },
  appbar: {
    paddingLeft: `${sidebarWidth + 21}px`,
    paddingTop: "23px",
    backgroundColor: `${theme.palette.background.default} !important`,
    height: `${headerHeight}px !important`,
    backgroundImage: "none !important",
    borderBottom: `1px solid ${Style.additionalBackground}`,
  },
  input: { width: "100% !important" },
  subtitle: { marginTop: "30px !important" },
}));

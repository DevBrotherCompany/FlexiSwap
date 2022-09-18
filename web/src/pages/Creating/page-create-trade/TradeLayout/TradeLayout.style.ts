import { makeStyles } from "@mui/styles";

import { sidebarWidth } from "components/Sidebar/Sidebar.style";

export const useTradeLayoutStyles = makeStyles(() => ({
  container: {
    paddingLeft: `${sidebarWidth + 50}px`,
    paddingTop: "34px",
  },
  btn: { marginTop: "50px !important" },
}));

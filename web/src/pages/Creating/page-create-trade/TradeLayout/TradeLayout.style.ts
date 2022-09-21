import { makeStyles } from "@mui/styles";

import { sidebarWidth } from "components/Sidebar/Sidebar.style";

export const useTradeLayoutStyles = makeStyles(() => ({
  container: {
    paddingLeft: `${sidebarWidth + 50}px`,
    display: "flex",
    // paddingTop: "34px",
    // width: '60%',
    // borderRight: `1px solid ${Style.additionalBackground}`,
    // height: '100vh',
  },
  btn: { marginTop: "50px !important" },
}));

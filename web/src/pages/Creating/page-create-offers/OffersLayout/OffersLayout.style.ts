import { makeStyles } from "@mui/styles";

import { sidebarWidth } from "components/Sidebar/Sidebar.style";

export const useOfferLayoutStyles = makeStyles(() => ({
  container: {
    paddingLeft: `${sidebarWidth + 50}px`,
    paddingTop: "34px",
  },
}));
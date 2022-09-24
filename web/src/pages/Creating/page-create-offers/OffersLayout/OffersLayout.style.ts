import { makeStyles } from "@mui/styles";

import { sidebarWidth } from "components/Sidebar/Sidebar.style";
import { Style } from "shared/variables";

export const useOfferLayoutStyles = makeStyles(() => ({
  container: {
    paddingLeft: `${sidebarWidth + 50}px`,
    display: "flex",
  },
  link: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "17px",
    color: Style.additionalPrimaryText,
    textDecoration: "none",
  },
}));

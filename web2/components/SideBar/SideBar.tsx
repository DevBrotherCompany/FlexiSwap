import React from "react";
import FlexiLogo from "../FlexiLogo/FlexiLogo";
import { useSideBarStyles } from "./SideBar.styles";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const classes = useSideBarStyles();
  return (
    <div className={classes.sidebar}>
      <FlexiLogo className={classes.logo} />
      {children}
    </div>
  );
};

export default SideBar;

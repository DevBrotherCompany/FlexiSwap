import React from "react";

import SideBar from "@/components/SideBar/SideBar";
import { FlexiSubtitle } from "@/components/FlexiSubtitle/FlexiSubtitle";

interface CreatingSidebarProps {
  subtitle?: string;
  children: React.ReactNode;
}

export const CreatingSidebar: React.FC<CreatingSidebarProps> = ({
  subtitle = "Create trade",
  children,
}) => {
  return (
    <SideBar>
      <FlexiSubtitle>{subtitle}</FlexiSubtitle>
      {children}
    </SideBar>
  );
};

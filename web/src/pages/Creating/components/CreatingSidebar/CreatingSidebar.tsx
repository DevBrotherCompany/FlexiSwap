import React, { PropsWithChildren } from "react";

import { Sidebar } from "components/Sidebar/Sidebar";
import { FlexiSubtitle } from "components/FlexiSubtitle/FlexiSubtitle";

interface CreatingSidebarProps extends PropsWithChildren {
  subtitle?: string;
}

export const CreatingSidebar: React.FC<CreatingSidebarProps> = ({
  subtitle = "Create trade",
  children,
}) => {
  return (
    <Sidebar>
      <FlexiSubtitle>{subtitle}</FlexiSubtitle>
      {children}
    </Sidebar>
  );
};

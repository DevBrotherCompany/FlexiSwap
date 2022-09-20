import React from 'react'

import { Sidebar } from 'components/Sidebar/Sidebar'
import { FlexiSubtitle } from 'components/FlexiSubtitle/FlexiSubtitle'

interface CreatingSidebarProps {
  subtitle?: string
}

export const CreatingSidebar: React.FC<CreatingSidebarProps> = ({ subtitle = 'Create trade', children }) => {
  return (
    <Sidebar>
      <FlexiSubtitle>{subtitle}</FlexiSubtitle>
      {children}
    </Sidebar>
  )
}

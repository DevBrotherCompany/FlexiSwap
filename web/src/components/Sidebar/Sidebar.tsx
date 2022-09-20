import React, { FC } from 'react'
import { useSidebarStyles } from './Sidebar.style'

import { Drawer } from '@mui/material'

import { FlexiLogo } from 'components/FlexiLogo/FlexiLogo'

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  const classes = useSidebarStyles()
  return (
    <Drawer variant={'permanent'} anchor={'left'} classes={{ paper: classes.wrapper }}>
      <FlexiLogo className={classes.logo} />
      {children}
    </Drawer>
  )
}

import React, { KeyboardEvent, useState } from 'react'
import { useTradesSidebarStyles } from './TradesLayout.style'

import { useNavigate } from 'react-router-dom'

import { AppBar, Toolbar } from '@mui/material'

import { FlexiButton } from 'components/FlexiButton/FlexiButton'
import { Sidebar } from 'components/Sidebar/Sidebar'
import { FlexiInput } from 'components/FlexiInput/FlexiInput'
import { FlexiSubtitle } from 'components/FlexiSubtitle/FlexiSubtitle'

import { useAuth } from 'hooks'
import { RouteName } from 'shared/routes'

import { SidebarList } from '../SidebarList/SidebarList'
import { ConnectWallet } from '../ConnectWallet/ConnectWallet'

interface TradesLayoutProps {
  onSearchChange?: (value: string) => void
  onSearchPress?: (value: string) => void
}

export const TradesLayout: React.FC<TradesLayoutProps> = ({ onSearchChange, onSearchPress, children }) => {
  const classes = useTradesSidebarStyles()
  const { account } = useAuth()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange && onSearchChange(e.target.value)
    setSearch(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchPress && onSearchPress(search)
    }
  }

  const handleCreateTrade = () => {
    navigate(RouteName.CreateTrade)
  }

  return (
    <main className={classes.wrapper}>
      <AppBar classes={{ root: classes.appbar }}>
        <Toolbar>
          <FlexiInput onKeyDown={handleKeyDown} onChange={handleChange} className={classes.input} placeholder={'Search by NFTs, username...'} />
        </Toolbar>
      </AppBar>
      <Sidebar>
        <FlexiButton onClick={handleCreateTrade}>Create trade</FlexiButton>
        <FlexiSubtitle className={classes.subtitle}>Marketplace</FlexiSubtitle>
        <SidebarList />
        {!account && <ConnectWallet />}
      </Sidebar>
      {children}
    </main>
  )
}

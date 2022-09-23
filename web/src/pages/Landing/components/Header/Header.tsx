import React from 'react'
import { useHeaderStyles } from './Header.style'

import { useAuth } from 'hooks'
import { MetamaskButton } from 'components/MetamaskButton/MetamaskButton'
import { Grid } from '@mui/material'

export const Header: React.FC = () => {
  const classes = useHeaderStyles()
  const { isAuthenticated, login } = useAuth()

  const handleClick = () => {
    login({ signingMessage: 'Hi from FlexiSwap' })
  }

  return (
    <header className={classes.container}>
      FlexiSwap
      {!isAuthenticated && (
        <Grid item>
          <MetamaskButton onClick={handleClick} />
        </Grid>
      )}
    </header>
  )
}

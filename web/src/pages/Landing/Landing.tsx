import React from 'react'
import { useLandingStyles } from './Landing.style'

import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

export const Landing: React.FC = () => {
  const classes = useLandingStyles()
  return (
    <main className={classes.main}>
      <Header />
      <Main />
    </main>
  )
}

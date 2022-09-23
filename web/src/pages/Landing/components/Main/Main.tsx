import { FlexiButton } from 'components/FlexiButton/FlexiButton'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteName } from 'shared/routes'

export const Main: React.FC = () => {
  const navigate = useNavigate()

  const handleStartTrading = () => {
    navigate(RouteName.AllTrades)
  }

  return (
    <>
      <div style={{ width: 'fit-content' }}>
        <FlexiButton onClick={handleStartTrading} outlineColor='white' variant='outlined'>
          Start Trading
        </FlexiButton>
      </div>
    </>
  )
}

import React from 'react'
import { MoralisProvider } from 'react-moralis'

export const Web3Connector: React.FC = ({ children }) => {
  return (
    <MoralisProvider appId={process.env.REACT_APP_APP_KEY ?? ''} serverUrl={process.env.REACT_APP_SERVER_URL ?? ''}>
      {children}
    </MoralisProvider>
  )
}

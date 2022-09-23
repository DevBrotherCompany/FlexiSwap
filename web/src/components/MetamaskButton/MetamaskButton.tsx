import React from 'react'

import { ReactComponent as MetamaskIcon } from './assets/MetamaskIcon.svg'
import { FlexiButton, FlexiButtonProps } from 'components/FlexiButton/FlexiButton'

interface MetamaskButtonProps extends Omit<FlexiButtonProps, 'loading' | 'loadingPosition'> {}

export const MetamaskButton: React.FC<MetamaskButtonProps> = ({ color = 'secondary', children = 'Connect wallet', ...props }) => {
  return (
    <FlexiButton {...props} endIcon={<MetamaskIcon />} color={color}>
      {children}
    </FlexiButton>
  )
}

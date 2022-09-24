import React, { FC, ReactNode } from 'react'
import { useFlexiButtonStyles } from './FlexiButton.styles'

import cn from 'classnames'
import { ButtonProps } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

export interface FlexiButtonProps extends ButtonProps {
  loading?: boolean
  loadingPosition?: 'start' | 'end'
  loadingIndicator?: ReactNode
  slim?: boolean
  outlineColor?: 'default' | 'white'
}

export const FlexiButton: FC<FlexiButtonProps> = ({ children, variant = 'contained', outlineColor = 'default', slim, className, ...props }) => {
  const classes = useFlexiButtonStyles()
  return (
    <LoadingButton {...props} className={cn(classes.btn, className, { [classes.slim]: slim, [classes.white]: outlineColor === 'white' })} variant={variant}>
      {children}
    </LoadingButton>
  )
}

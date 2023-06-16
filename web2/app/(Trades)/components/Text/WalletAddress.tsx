import { makeStyles } from '@mui/styles'

import cn from 'classnames'
import { Typography } from '@mui/material'

interface WalletAddressProps {
  className?: string;
  children: React.ReactNode
}

export const useUserNames = makeStyles(() => ({
  text: { opacity: '.7' },
}))

export const WalletAddress: React.FC<WalletAddressProps> = ({ className, children }) => {
  const classes = useUserNames()
  return (
    <Typography className={cn(classes.text, className)} component={'span'}>
      {children}
    </Typography>
  )
}

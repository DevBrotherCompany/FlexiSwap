import { makeStyles } from '@mui/styles'

import cn from 'classnames'
import { Typography } from '@mui/material'

interface UserNameProps {
  className?: string;
  children: React.ReactNode
}

export const useUserNames = makeStyles(() => ({
  name: { color: '#FFF' },
}))

export const UserName: React.FC<UserNameProps> = ({ className, children }) => {
  const classes = useUserNames()
  return (
    <Typography className={cn(classes.name, className)} component={'span'}>
      {children}
    </Typography>
  )
}

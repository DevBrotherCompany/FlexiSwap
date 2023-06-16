import cn from 'classnames'

import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material';

export const useLimitStyles = makeStyles((theme: Theme) => ({
  text: {
    margin: 0,
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: '18px',
    color: `${theme.palette.secondary.contrastText}`
  },
}))

interface LimitProps {
  className?: string;
  children: React.ReactNode
}

export const Limit: React.FC<LimitProps> = ({ className, children }) => {
  const classes = useLimitStyles()
  return <h6 className={cn(classes.text, className)}>{children}</h6>
}

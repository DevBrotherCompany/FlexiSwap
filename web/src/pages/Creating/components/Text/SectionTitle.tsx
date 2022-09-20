import React from 'react'
import { makeStyles } from '@mui/styles'

import cn from 'classnames'

import { Style } from 'styles/variables'

export const useSectionTitleStyles = makeStyles(() => ({
  text: {
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '24px',
    color: Style.additionalBackground,
    margin: '0 0 16px 0',
  },
}))

interface SectionTitleProps {
  className?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ className, children }) => {
  const classes = useSectionTitleStyles()
  return <h5 className={cn(classes.text, className)}>{children}</h5>
}

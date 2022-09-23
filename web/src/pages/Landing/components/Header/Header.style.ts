import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useHeaderStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

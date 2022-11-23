import React, { ReactNode } from 'react'
import { Paper, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? '#323546' : '#ffffff',
  },
}))

const TrendWrapper = ({ children }: { children: ReactNode }) => {
  const { classes } = useStyles()
  return <Paper className={classes.wrapper}>{children}</Paper>
}

export default TrendWrapper

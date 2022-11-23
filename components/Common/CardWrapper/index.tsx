import React, { ReactNode } from 'react'
import { Paper, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? '#323546' : '#f4f6f9',
    height: '200px',
    width: '100%',
  },
}))

const CardWrapper = ({ children }: { children: ReactNode }) => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.wrapper} radius="md" shadow="xs" p="sm">
      {children}
    </Paper>
  )
}

export default CardWrapper

import React, { ReactNode } from 'react'
import { Card, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? '#323546' : '#ffffff',
    height: '200px',
    width: '100%',
  },
}))

const CardWrapper = ({ children }: { children: ReactNode }) => {
  const { classes } = useStyles()
  return (
    <Card className={classes.wrapper} radius="md" shadow="xs" p="sm">
      {children}
    </Card>
  )
}

export default CardWrapper

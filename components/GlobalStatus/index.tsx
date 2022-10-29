import { Container, Group, Text } from '@mantine/core'
import React from 'react'

const GlobalStatus = () => {
  return (
    <Container fluid={true} px={30} size="sm">
      <Group>
        <Text size="sm">Cryptos:</Text>
      </Group>
    </Container>
  )
}

export default GlobalStatus

import { Container, Group, Text, Button } from '@mantine/core'
import React from 'react'
import { IconTriangleInverted, IconCoin } from '@tabler/icons'
import ThemePicker from '../ThemePicker'

const GlobalStatus = () => {
  return (
    <Container fluid={true}>
      <Group position="apart">
        <Group>
          <Text size="xs" color="dimmed" weight={500}>
            Cryptos:21,555
          </Text>
          <Text size="xs" color="dimmed" weight={500}>
            Exchanges: 521
          </Text>
          <Text size="xs" color="dimmed" weight={500}>
            Market Cap: $1,02132973891739212913129
          </Text>
          <Text size="xs" color="dimmed" weight={500}>
            24h Vol: $87982719012791279
          </Text>
          <Text size="xs" color="dimmed" weight={500}>
            Dominance: BTC: 39.0% ETH19.5%
          </Text>
        </Group>
        <Group>
          <Button
            rightIcon={<IconTriangleInverted size={10} />}
            size="xs"
            variant="subtle"
            color="dark"
          >
            English
          </Button>
          <Button
            leftIcon={<IconCoin size={15} color="green" />}
            rightIcon={<IconTriangleInverted size={10} />}
            size="xs"
            variant="subtle"
            color="dark"
          >
            USD
          </Button>
          <ThemePicker />
          <Button size="sm" variant="outline" radius="md">
            Log In
          </Button>
          <Button size="sm" variant="filled" radius="md">
            Sign up
          </Button>
        </Group>
      </Group>
    </Container>
  )
}

export default GlobalStatus

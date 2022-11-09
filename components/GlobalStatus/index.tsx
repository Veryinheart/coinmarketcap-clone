import { Container, Group, Text, Button } from '@mantine/core'
import React from 'react'
import { IconTriangleInverted, IconCoin } from '@tabler/icons'
import ThemePicker from '../ThemePicker'
import GlobalStatisticText from '../Common/GlobalStatisticText'
const GlobalStatus = () => {
  return (
    <Container fluid={true}>
      <Group position="apart" noWrap>
        <Group noWrap>
          <Text size="xs">
            <GlobalStatisticText name="Cryptos" data="21612" />
          </Text>
          <Text size="xs" color="dimmed" weight={500} component="span">
            <GlobalStatisticText name="Exchange" data="522" />
          </Text>

          <Text size="xs" color="dimmed" weight={500} component="span">
            <GlobalStatisticText
              name=" Market Cap"
              data="$1,02132973891739212913129"
            />
          </Text>
          <Text size="xs" color="dimmed" weight={500} component="span">
            <GlobalStatisticText name="24h Vol" data="$87982719012791279" />
          </Text>
          <Text size="xs" color="dimmed" weight={500} component="span">
            <GlobalStatisticText name="Dominance" data="BTC: 39.0% ETH19.5%" />
          </Text>
        </Group>
        <Group noWrap>
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

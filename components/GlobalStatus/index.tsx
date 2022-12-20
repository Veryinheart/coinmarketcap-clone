import { Container, Group, Text, Button } from '@mantine/core'
import React from 'react'
import { IconTriangleInverted, IconCoin } from '@tabler/icons'
import ThemePicker from '../ThemePicker'
import GlobalStatisticText from '../Common/GlobalStatisticText'
import useGlobalData from '../../hooks/useGlobalData'
import { toThousands } from '../../utils/compute'

const GlobalStatus = () => {
  const { data } = useGlobalData()

  const totalMarketCap =
    '$' + toThousands(data?.data?.total_market_cap.usd.toString().split('.')[0])
  const totalVol =
    '$' + toThousands(data?.data?.total_volume.usd.toString().split('.')[0])
  const dominance = `BTC ${data?.data?.market_cap_percentage.btc.toFixed(
    2
  )}% ETH ${data?.data?.market_cap_percentage.eth.toFixed(2)}%`

  return (
    <Container size={1400}>
      <Group position="apart" noWrap>
        <Group noWrap>
          <Text size="xs">
            <GlobalStatisticText
              name="Cryptos"
              data={data?.data?.active_cryptocurrencies}
            />
          </Text>
          <Text size="xs" color="dimmed" weight={500} component="span">
            <GlobalStatisticText name="Exchange" data={data?.data?.markets} />
          </Text>

          <Text size="xs" color="dimmed" weight={500} component="span">
            <GlobalStatisticText name=" Market Cap" data={totalMarketCap} />
          </Text>
          <Text size="xs" color="dimmed" weight={500} component="span">
            <GlobalStatisticText name="24h Vol" data={totalVol} />
          </Text>
          <Text size="xs" color="dimmed" weight={500} component="span">
            <GlobalStatisticText name="Dominance" data={dominance} />
          </Text>
        </Group>
        <Group noWrap>
          <Button
            rightIcon={<IconTriangleInverted size={10} />}
            size="xs"
            variant="subtle"
            color="dark"
            compact={true}
          >
            English
          </Button>
          <Button
            leftIcon={<IconCoin size={15} color="green" />}
            rightIcon={<IconTriangleInverted size={10} />}
            size="xs"
            variant="subtle"
            color="dark"
            compact={true}
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

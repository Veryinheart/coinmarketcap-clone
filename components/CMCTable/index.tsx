import {
  Button,
  Container,
  Divider,
  Group,
  Select,
  Table,
  Text,
} from '@mantine/core'
import {
  IconAdjustmentsHorizontal,
  IconChartPie,
  IconStar,
  IconTable,
} from '@tabler/icons'

const CMCTable = () => {
  const rowsData = [
    { value: '100', label: '100' },
    { value: '50', label: '50' },
    { value: '20', label: '20' },
  ]

  return (
    <Container size={1400}>
      <Group position="apart" noWrap>
        <Group position="apart" noWrap>
          <Button
            leftIcon={<IconStar size={15} />}
            variant="subtle"
            color="dark"
            size="xs"
          >
            Watchlist
          </Button>
          <Button
            leftIcon={<IconChartPie size={15} />}
            variant="subtle"
            color="dark"
            size="xs"
          >
            Portfolio
          </Button>
          <Divider orientation="vertical" />
        </Group>
        <Group position="apart" noWrap>
          <Button variant="subtle" color="gray" radius="xs" compact>
            Cryptocurrencies
          </Button>
          <Button variant="subtle" color="gray" radius="xs" compact>
            Categories
          </Button>
          <Button variant="subtle" color="gray" radius="xs" compact>
            DeFi
          </Button>
          <Button variant="subtle" color="gray" radius="xs" compact>
            NFT
          </Button>
          <Button variant="subtle" color="gray" radius="xs" compact>
            Metaverse
          </Button>
          <Button variant="subtle" color="gray" radius="xs" compact>
            Polkadot
          </Button>
          <Button variant="subtle" color="gray" radius="xs" compact>
            BNB Chain
          </Button>
          <Button variant="subtle" color="gray" radius="xs" compact>
            BNB Chain
          </Button>
        </Group>
        <Group position="apart" noWrap>
          <Group noWrap>
            <Text style={{ fontSize: '12px' }}>Show rows: </Text>
            <Select
              data={rowsData}
              size="xs"
              defaultValue="100"
              variant="filled"
              style={{ maxWidth: 60 }}
            />
          </Group>
          <Button
            leftIcon={<IconAdjustmentsHorizontal size={15} />}
            variant="subtle"
            color="gray"
            radius="xs"
            compact
          >
            Filters
          </Button>
          <Button
            leftIcon={<IconTable size={15} />}
            variant="subtle"
            color="gray"
            radius="xs"
            compact
          >
            Customize
          </Button>
        </Group>
      </Group>
      <Divider my="xs" />
      <Table horizontalSpacing="lg" withColumnBorders>
        <thead>
          <tr>
            <th>#</th>
            <th>
              <Text align="left">Name</Text>
            </th>
            <th>
              <Text align="right">Price</Text>
            </th>
            <th>
              <Text align="right">1h%</Text>
            </th>
            <th>
              <Text align="right">24h%</Text>
            </th>
            <th>
              <Text align="right">7d%</Text>
            </th>
            <th>
              <Text align="right">Market Cap</Text>
            </th>
            <th>
              <Text align="right">Volume(24h)</Text>
            </th>
            <th>
              <Text align="right">Circulating Supply</Text>
            </th>
            <th>
              <Text align="right">Last 7 Days</Text>
            </th>
            <th></th>
          </tr>
          <tr></tr>
        </thead>
      </Table>
    </Container>
  )
}

export default CMCTable

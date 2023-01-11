import {
  Button,
  Container,
  Divider,
  Group,
  Select,
  Table,
  Text,
  Stack,
  Progress,
  Popover,
  UnstyledButton,
  Pagination,
} from '@mantine/core'
import {
  IconAdjustmentsHorizontal,
  IconChartPie,
  IconStar,
  IconTable,
  IconDotsVertical,
} from '@tabler/icons'
import useCoinList from '../../hooks/useCoinList'
import Currency from '../Common/Currency'
import Rate from '../Common/Rate'
import { CoinRow } from './types'
import Image from 'next/image'
import { toThousands } from '../../utils/compute'

const CMCTable = () => {
  const rowsData = [
    { value: '100', label: '100' },
    { value: '50', label: '50' },
    { value: '20', label: '20' },
  ]

  const getSparkingChart = (path: string) => {
    const id = path.split('/')[5]
    return `https://www.coingecko.com/coins/${id}/sparkline.svg`
  }

  const { data } = useCoinList()

  const rows = data?.map((row: CoinRow) => (
    <tr key={row.id}>
      <td>
        <IconStar size={15} onClick={() => console.log('1')} />
      </td>
      <td>{row.market_cap_rank}</td>
      <td>
        <Group spacing="xs">
          {<Image alt="icon" src={row.image} width={24} height={24} />}{' '}
          <Text weight={700}>{row.name}</Text>{' '}
          <Text weight={700} color="gray">
            {row.symbol.toUpperCase()}
          </Text>
        </Group>
      </td>
      <td>
        <Currency
          isIncrement={row.price_change_percentage_1h_in_currency > 0}
          price={row.current_price}
        />
      </td>
      <td>
        <Rate
          isIncrement={row.price_change_percentage_1h_in_currency > 0}
          rate={row.price_change_percentage_1h_in_currency.toFixed(2)}
        />
      </td>
      <td>
        <Rate
          isIncrement={row.price_change_percentage_24h_in_currency > 0}
          rate={row.price_change_percentage_24h_in_currency.toFixed(2)}
        />
      </td>
      <td>
        <Rate
          isIncrement={row.price_change_percentage_7d_in_currency > 0}
          rate={row.price_change_percentage_7d_in_currency.toFixed(2)}
        />
      </td>
      <td>${toThousands(row.market_cap.toString())}</td>
      <td>${toThousands(row.total_volume.toString())}</td>
      <td>
        <Stack>
          <Text>
            {toThousands(row.circulating_supply.toFixed(0).toString())}{' '}
            {row.symbol.toUpperCase()}
          </Text>
          {row.circulating_supply / row.total_supply < 1 ? (
            <Progress
              color="gray"
              size="sm"
              value={(row.circulating_supply / row.total_supply) * 100}
            />
          ) : null}
        </Stack>
      </td>
      <td>
        <Image
          src={getSparkingChart(row.image)}
          alt={`coin sparking chart`}
          width="135"
          height="50"
        />
      </td>
      <td>
        <Popover width={190} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <UnstyledButton>
              <IconDotsVertical />
            </UnstyledButton>
          </Popover.Target>

          <Popover.Dropdown>
            <Button variant="subtle" color="dark">
              View Charts
            </Button>
            <Button variant="subtle" color="dark">
              View Markets
            </Button>
            <Button variant="subtle" color="dark">
              View Historial Data
            </Button>
          </Popover.Dropdown>
        </Popover>
      </td>
    </tr>
  ))

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
      <Table horizontalSpacing="lg" highlightOnHover>
        <thead>
          <tr>
            <th></th>
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
        <tbody>{rows}</tbody>
      </Table>
      <div style={{ marginTop: '10px', marginBottom: '20px' }}>
        <Group position="apart" noWrap>
          <Text>Showing 401 - 500 out of 8864</Text>
          <Pagination total={20} siblings={1} initialPage={10} />
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
        </Group>
      </div>
    </Container>
  )
}

export default CMCTable

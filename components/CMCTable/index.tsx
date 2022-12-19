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
import useCoinList from '../../hooks/useCoinList'
import Currency from '../Common/Currency'
import Rate from '../Common/Rate'
import { CoinRow } from './types'
import Image from 'next/image'

const CMCTable = () => {
  const rowsData = [
    { value: '100', label: '100' },
    { value: '50', label: '50' },
    { value: '20', label: '20' },
  ]

  const { data } = useCoinList()

  console.log(data)

  const rows = data.map((row: CoinRow) => (
    <tr key={row.id}>
      <td>
        <IconStar size={15} onClick={() => console.log('1')} />
      </td>
      <td>{row.market_cap_rank}</td>
      <td>
        <Group>
          {<Image alt="icon" src={row.image} width={24} height={24} />}{' '}
          <b>{row.name}</b> {row.symbol.toUpperCase()}
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
      <td>${row.market_cap}</td>
      <td>${row.total_volume}</td>
      <td>{row.total_supply}</td>
      <td>svg</td>
      <td>2</td>
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
    </Container>
  )
}

export default CMCTable

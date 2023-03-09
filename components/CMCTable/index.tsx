import { useState, useEffect } from 'react'
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
//import useCoinList from '../../hooks/useCoinList'
import Currency from '../Common/Currency'
import Rate from '../Common/Rate'
import { CoinRow } from './types'
import Image from 'next/image'
import { toThousands } from '../../utils/compute'
import { getCoinList } from '../../lib/coins'

const CMCTable = () => {
  const [pagination, setPagination] = useState<{
    page: string
    per_page: string
  }>({ page: '1', per_page: '20' })

  const [coinsData, setCoinsData] = useState<CoinRow[]>()

  useEffect(() => {
    const getData = async () => {
      const data = await getCoinList('/coins/markets', {
        ...pagination,
        vs_currency: 'usd',
        order: 'market_cap_desc',
        sparkline: false,
        price_change_percentage: '1h,24h,7d',
      })
      setCoinsData(data)
      //console.log(data)
    }
    getData()
  }, [pagination])

  const handlePerPage = (value: string) => {
    setPagination({ ...pagination, per_page: value })
  }

  const handlePage = (value: number) => {

    setPagination({
      ...pagination,
      page: value.toString(),
      per_page: pagination.per_page,
    })
  }

  const rowsData = [
    { value: '100', label: '100' },
    { value: '50', label: '50' },
    { value: '20', label: '20' },
  ]

  const getSparkingChart = (path: string) => {
    const id = path.split('/')[5]
    return `https://www.coingecko.com/coins/${id}/sparkline.svg`
  }

  const rows = coinsData?.map((row: CoinRow) => (
    <tr key={row.id}>
      <td>
        <IconStar
          size={15}
          onClick={() => console.log('add to favorite list')}
        />
      </td>
      <td>{row.market_cap_rank}</td>
      <td>
        <Group spacing="xs" noWrap>
          <Image alt="icon" src={row.image} width={24} height={24} />
          &nbsp;
          <Text weight={700}>{row.name}</Text>&nbsp;
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
          rate={row?.price_change_percentage_1h_in_currency?.toFixed(2)}
        />
      </td>
      <td>
        <Rate
          isIncrement={row.price_change_percentage_24h_in_currency > 0}
          rate={row?.price_change_percentage_24h_in_currency?.toFixed(2)}
        />
      </td>
      <td>
        <Rate
          isIncrement={row?.price_change_percentage_7d_in_currency > 0}
          rate={row?.price_change_percentage_7d_in_currency?.toFixed(2)}
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
        </Group>
        <Group position="apart" noWrap>
          <Group noWrap>
            <Text style={{ fontSize: '12px' }}>Show rows: </Text>
            <Select
              data={rowsData}
              size="xs"
              defaultValue={pagination.per_page}
              variant="filled"
              style={{ maxWidth: 60 }}
              value={pagination.per_page}
              onChange={(value: string) => handlePerPage(value)}
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

      <Table horizontalSpacing="lg" highlightOnHover sx={{ minWidth: 700 }}>
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
          <Text>
            Showing {(+pagination.page - 1) * +pagination.per_page + 1} -{' '}
            {+pagination.page * +pagination.per_page} out of 8864
          </Text>
          <Pagination
            total={444}
            siblings={1}
            initialPage={+pagination.page}
            onChange={(page: number) => handlePage(page)}
          />
          <Group noWrap>
            <Text style={{ fontSize: '12px' }}>Show rows: </Text>
            <Select
              data={rowsData}
              size="xs"
              defaultValue={pagination.per_page}
              variant="filled"
              style={{ maxWidth: 60 }}
              value={pagination.per_page}
              onChange={(value: string) => handlePerPage(value)}
            />
          </Group>
        </Group>
      </div>
    </Container>
  )
}

export default CMCTable

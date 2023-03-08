import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Group,
  Container,
  Button,
  Input,
  useMantineColorScheme,
} from '@mantine/core'
import { IconSearch, IconStar, IconChartPie } from '@tabler/icons'
import ButtonWithPopover from '../Common/ButtonWithPopover/index'

const Header = () => {
  const { colorScheme } = useMantineColorScheme()

  const logoUrl =
    colorScheme === 'dark'
      ? 'https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
      : 'https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg'

  return (
    <Container size={1400}>
      <Group position="apart" noWrap>
        <Group>
          <Link href="/" passHref>
            <Image src={logoUrl} alt="logo" width={180} height={50} />
          </Link>

          <ButtonWithPopover text="Cryptocurrencies" />
          <ButtonWithPopover text="Exchange" />
          <ButtonWithPopover text="Community" />
          <ButtonWithPopover text="Products" />
          <ButtonWithPopover text="Learn" />
        </Group>
        <Group>
          <Button
            leftIcon={<IconStar size={15} />}
            variant="subtle"
            color="gray"
            size="xs"
          >
            Watchlist
          </Button>
          <Button
            leftIcon={<IconChartPie size={15} />}
            variant="subtle"
            color="gray"
            size="xs"
          >
            Portfolio
          </Button>
          <Input
            icon={<IconSearch size={15} />}
            variant="filled"
            placeholder="Search"
          />
        </Group>
      </Group>
    </Container>
  )
}

export default Header

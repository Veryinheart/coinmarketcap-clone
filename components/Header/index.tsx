import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Group, Container, Button, Input } from '@mantine/core'
import { IconSearch, IconStar, IconChartPie } from '@tabler/icons'
import ButtonWithPopover from '../Common/ButtonWithPopover/index'

// const HeaderWrapper = styled.div`
//   display: flex;
//   padding-left: 1rem;
//   padding-right: 1rem;
//   justify-content: center;
//   align-items: center;
//   max-width: auto;
//   height: 100%;
// `
// const Nav = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
// `

// const NavItem = styled.div`
//   position: relative;
//   margin-right: 0.25rem;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.6;
//     color: #6188ff;
//   }
// `

const Header = () => {
  return (
    <Container fluid={true} px={30}>
      <Group position="apart">
        <Group>
          <Link href="/" passHref>
            <Image
              src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
              alt="logo"
              width={200}
              height={60}
            />
          </Link>

          <ButtonWithPopover text="Cryptocurrencies" />
          <ButtonWithPopover text="Exchange" />
          <ButtonWithPopover text="Community" />
          <ButtonWithPopover text="Products" />
          <ButtonWithPopover text="Learn" />
        </Group>
        <Group>
          <Button
            leftIcon={<IconStar size={18} />}
            variant="subtle"
            color="gray"
          >
            Watchlist
          </Button>
          <Button
            leftIcon={<IconChartPie size={18} />}
            variant="subtle"
            color="gray"
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

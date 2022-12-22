import {
  createStyles,
  Card,
  Group,
  Center,
  Text,
  Button,
  Stack,
} from '@mantine/core'
import React, { ReactNode } from 'react'
import MoreButton from '../../Common/MoreButton'
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
  card: {
    height: 200,
    width: 448,
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colorScheme === 'dark' ? '#323546' : '#ffffff',
  },
}))

interface CardProps {
  content?: ReactNode
}

const accountsData = [
  {
    name: 'Qtum_Foundation',
    handle: '@Qtum_Foundation',
    icon: 'https://s3.coinmarketcap.com/static/img/portraits/62e88280ae5a2d740c0774fd.png',
  },
  {
    name: 'IOTA',
    handle: '@TOTA',
    icon: 'https://s3.coinmarketcap.com/static/img/portraits/62287bebe89bc32c2edec9c2.png',
  },
  {
    name: 'PlayDapp',
    handle: '@QPlayDapp_IO',
    icon: 'https://s3.coinmarketcap.com/static/img/portraits/62bd691fc8261218d3899f79.png',
  },
]

const TopAccounts = ({}: CardProps) => {
  const { classes } = useStyles()

  return (
    <Card radius="md" shadow="xs" className={classes.card}>
      <Card.Section>
        <Group position="apart" noWrap ml="xs" mr="xs">
          <Center>
            <span style={{ fontSize: '20px' }}>⭐️</span>
            &nbsp;&nbsp;
            <p style={{ fontWeight: 'bold' }}>Top Community Account</p>
          </Center>
          <MoreButton />
        </Group>
      </Card.Section>
      <Stack>
        {accountsData &&
          accountsData.map((account) => (
            <Card.Section key={account.name}>
              <Group position="apart" noWrap ml="xs" mr="xs">
                <Group position="apart">
                  <Image
                    src={account.icon}
                    alt="account_logo"
                    width={24}
                    height={24}
                  />
                  <b>{account.name}</b>
                  <Image
                    src={
                      'https://s2.coinmarketcap.com/static/cloud/img/icon/certified.svg?_=f124081.svg'
                    }
                    alt="certified"
                    height={15}
                    width={15}
                  />
                  <Text size="xs">{account.handle}</Text>
                </Group>
                <Button variant="light" color="indigo" size="xs">
                  + Follow
                </Button>
              </Group>
            </Card.Section>
          ))}
      </Stack>
    </Card>
  )
}

export default TopAccounts

import {
  createStyles,
  Card,
  Group,
  Center,
  Avatar,
  Text,
  Stack,
} from '@mantine/core'
import React, { ReactNode } from 'react'
import MoreButton from '../../Common/MoreButton'
import Image from 'next/image'
import { IconMessageCircle, IconHeart } from '@tabler/icons'
import { useMantineColorScheme } from '@mantine/core'

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

const TopPosts = ({}: CardProps) => {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()

  const fontColor = colorScheme === 'dark' ? '#858CA2' : '#808A9D'

  return (
    <Card radius="md" shadow="xs" className={classes.card}>
      <Card.Section>
        <Group position="apart" noWrap ml="xs" mr="xs">
          <Center>
            <span style={{ fontSize: '20px' }}>⭐️</span>
            &nbsp;&nbsp;
            <p style={{ fontWeight: 'bold' }}>Top Community Posts</p>
          </Center>
          <MoreButton />
        </Group>
      </Card.Section>
      <Card.Section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: '5px',
          }}
        >
          <Avatar
            src={
              'https://s3.coinmarketcap.com/static/img/portraits/62876e92bedeb632050eb4ae.png'
            }
            alt="logo"
            radius="xl"
          />

          <Stack sx={{ marginLeft: '5px' }}>
            <Group noWrap position="left" spacing={3}>
              <b>BNB Chain</b>
              <Image
                src={
                  'https://s2.coinmarketcap.com/static/cloud/img/icon/certified.svg?_=f124081.svg'
                }
                alt="certified"
                height={15}
                width={15}
              />
              <Text size="xs" color={fontColor}>
                @BNB Chain
              </Text>
            </Group>

            <Text size="sm">
              Find out how you can earn a Special Festive Prize with 12 Days of
              NFTs wit BNB Chain and Opensea ...
            </Text>
            <Group position="left" spacing="xs">
              <Text size="sm" color={fontColor}>
                {' '}
                Dec 20 ·{' '}
              </Text>
              <IconMessageCircle color="gray" size="16px" />
              <Text size="sm" color={fontColor}>
                {' '}
                5 ·{' '}
              </Text>
              <IconHeart color="gray" size="16px" />
              <Text size="sm" color={fontColor}>
                {' '}
                462{' '}
              </Text>
            </Group>
          </Stack>
        </div>
      </Card.Section>
    </Card>
  )
}

export default TopPosts

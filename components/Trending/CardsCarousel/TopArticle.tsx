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
import { IconEye, IconHeart } from '@tabler/icons'

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

const TopArticle = ({}: CardProps) => {
  const { classes } = useStyles()
  return (
    <Card radius="md" shadow="xs" className={classes.card}>
      <Card.Section>
        <Group position="apart" noWrap ml="xs" mr="xs">
          <Center>
            <span style={{ fontSize: '20px' }}>⭐️</span>
            &nbsp;&nbsp;
            <p style={{ fontWeight: 'bold' }}>Top Community Article</p>
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
              'https://academy-public.coinmarketcap.com/srd-optimized-uploads/3221dd2a1aa24f50a1c2db78dd6f525a.png'
            }
            alt="logo"
            radius="sm"
            size="xl"
          />
          <Stack sx={{ marginLeft: '5px' }}>
            <Group noWrap position="left" spacing={3}>
              <Image
                src={
                  'https://s3.coinmarketcap.com/static/img/portraits/6225bb3ee89bc32c2edec857.png'
                }
                alt="certified"
                height={15}
                width={15}
              />
              <Text size="xs" color="gray">
                ApolloX
              </Text>
            </Group>

            <Text size="sm">
              Crypto News of the Day: Binanace buys TokoCrypto and Voyager...
            </Text>
            <Group position="left" spacing="xs">
              <Text size="sm" color="gray">
                {' '}
                Dec 20 ·{' '}
              </Text>
              <IconEye color="gray" size="16px" />
              <Text size="sm" color="gray">
                {' '}
                287 ·{' '}
              </Text>
              <IconHeart color="gray" size="16px" />
              <Text size="sm" color="gray">
                {' '}
                10{' '}
              </Text>
            </Group>
          </Stack>
        </div>
      </Card.Section>
    </Card>
  )
}

export default TopArticle

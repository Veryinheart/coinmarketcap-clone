import {
  Container,
  Center,
  Group,
  Stack,
  Title,
  Button,
  useMantineColorScheme,
} from '@mantine/core'
import React from 'react'
import Image from 'next/image'

const Banner = () => {
  const { colorScheme } = useMantineColorScheme()
  console.log(colorScheme === 'dark')
  return (
    <div style={{ height: '100%' }}>
      <Container size={1400}>
        <Center>
          <Group grow>
            <Stack align="flex-start" spacing="xs">
              <Title order={1}>
                Be the first to know about <b>crypto news every day</b>
              </Title>
              Get crypto analysis, news and updates right to your inbox! Sign up
              here so you don&lsquo;t miss a single newsletter.
              <Button>Subscribe now</Button>
            </Stack>
          </Group>
          <Group>
            <Image
              src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=5f8a6ce.svg"
              alt="banner_image"
              height={418}
              width={572}
            />
          </Group>
        </Center>
      </Container>
    </div>
  )
}

export default Banner

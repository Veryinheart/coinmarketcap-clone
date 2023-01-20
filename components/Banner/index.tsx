import { Container, Center, Group, Stack, Text, Button } from '@mantine/core'
import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div style={{ height: '572px' }}>
      <Container size={1400}>
        <Center>
          <Group>
            <Stack align="flex-start" spacing="xs">
              <Text>
                Be the first to know about <b>crypto news every day</b>
              </Text>
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

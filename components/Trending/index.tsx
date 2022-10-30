import React from 'react'
import {
  Container,
  Group,
  Spoiler,
  Stack,
  Switch,
  Title,
  Text,
} from '@mantine/core'

const Trending = () => {
  return (
    <Container fluid={true}>
      <Stack>
        <Group position="apart">
          <Group>
            <Title order={3}>Today Cryptocurrency Prices by Market Cap</Title>
          </Group>
          <Group>
            <Switch size="md" labelPosition="left" label="Highlight" />
          </Group>
        </Group>
        <Group>
          <Spoiler
            maxHeight={20}
            showLabel="Read More"
            hideLabel="Read Less"
            transitionDuration={0}
          >
            <Text>
              The global crypto market cap is $1.01T, a 0.87% increase over the
              last day.
            </Text>
            <Text>
              The total crypto market volume over the last 24 hours is $88.49B,
              which makes a 0.18% increase. The total volume in DeFi is
              currently $4.02B, 4.54% of the total crypto market 24-hour volume.
              The volume of all stable coins is now $80.57B, which is 91.05% of
              the total crypto market 24-hour volume. Bitcoin’s dominance is
              currently 39.49%, a decrease of 0.12% over the day.
            </Text>
          </Spoiler>
        </Group>
      </Stack>
    </Container>
  )
}

export default Trending

import React, { useState } from 'react'
import {
  Container,
  Group,
  Stack,
  Switch,
  Title,
  Text,
  Anchor,
} from '@mantine/core'
import TrendingCard from './TrendingCard'

const Trending = () => {
  const [isReadMore, setIsReadMore] = useState(false)
  const [toggleHighlights, setToggleHighlights] = useState(true)
  return (
    <Container fluid={true}>
      <Stack>
        <Group position="apart">
          <Group>
            <Title order={3}>Today Cryptocurrency Prices by Market Cap</Title>
          </Group>
          <Group>
            <Switch
              size="md"
              labelPosition="left"
              label="Highlight"
              onClick={() => {
                setToggleHighlights(!toggleHighlights)
              }}
            />
          </Group>
        </Group>
        <Group>
          <Text>
            The global crypto market cap is $1.01T, a 0.87% increase over the
            last day.
          </Text>

          <Anchor
            component="button"
            type="button"
            onClick={() => {
              setIsReadMore(!isReadMore)
            }}
            underline
          >
            {isReadMore ? 'Read Less' : 'Read More'}
          </Anchor>
          {isReadMore && (
            <div style={{ maxWidth: '80%' }}>
              <Text>
                The total crypto market volume over the last 24 hours is
                $88.49B, which makes a 0.18% increase. The total volume in DeFi
                is currently $4.02B, 4.54% of the total crypto market 24-hour
                volume. The volume of all stable coins is now $80.57B, which is
                91.05% of the total crypto market 24-hour volume. Bitcoin’s
                dominance is currently 39.49%, a decrease of 0.12% over the day.
              </Text>
            </div>
          )}
        </Group>
        {toggleHighlights && (
          <Group>
            <TrendingCard />
          </Group>
        )}
      </Stack>
    </Container>
  )
}

export default Trending

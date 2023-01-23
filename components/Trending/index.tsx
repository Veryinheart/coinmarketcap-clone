import React, { useState } from 'react'
import {
  Anchor,
  Container,
  Group,
  Stack,
  Switch,
  Text,
  Title,
} from '@mantine/core'
import fire from '../../assets/fire.png'
import recent from '../../assets/recent.png'
import CardsCarousel from './CardsCarousel'
import TrendingCard from './TrendingCard'
import useTrendingData from '../../hooks/useTrendingData'

const Trending = () => {
  const [isReadMore, setIsReadMore] = useState(false)
  const [toggleHighlights, setToggleHighlights] = useState(true)

  const { data } = useTrendingData()

  return (
    <div style={{ maxWidth: '100vw' }}>
      <Container size={1400}>
        <Stack>
          <Group position="apart">
            <Group>
              <Title order={3}>Today Cryptocurrency Prices by Market Cap</Title>
            </Group>
            <Group>
              <Switch
                checked={toggleHighlights}
                size="md"
                labelPosition="left"
                label="Hightlight"
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
                  $88.49B, which makes a 0.18% increase. The total volume in
                  DeFi is currently $4.02B, 4.54% of the total crypto market
                  24-hour volume. The volume of all stable coins is now $80.57B,
                  which is 91.05% of the total crypto market 24-hour volume.
                  Bitcoin’s dominance is currently 39.49%, a decrease of 0.12%
                  over the day.
                </Text>
              </div>
            )}
          </Group>
          {toggleHighlights && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'nowrap',
                width: '100%',
              }}
            >
              <TrendingCard
                icon={fire}
                title="Trending"
                data={data.slice(0, 3)}
              />
              <TrendingCard
                icon={recent}
                title="Recent Added"
                data={data.slice(3, 6)}
              />
              <CardsCarousel />
            </div>
          )}
        </Stack>
      </Container>
    </div>
  )
}

export default Trending

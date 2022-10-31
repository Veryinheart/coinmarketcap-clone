import React from 'react'
import Image from 'next/image'
import { Card, Group, Stack, Text } from '@mantine/core'
import MoreButton from '../../Common/MoreButton'

const TrendingCard = () => {
  const icon = '/assets/fire.png'
  return (
    <Card>
      <Stack>
        <Group>
          <div>
            {icon && <Image src={icon} width={27} height={27} alt="logo" />}

            <Text>Trending</Text>
          </div>
          <MoreButton />
        </Group>
        <Group></Group>
        <Group></Group>
        <Group></Group>
      </Stack>
    </Card>
  )
}

export default TrendingCard

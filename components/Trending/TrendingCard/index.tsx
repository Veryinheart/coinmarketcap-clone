import { Group, Paper } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styled from 'styled-components'

import MoreButton from '../../Common/MoreButton'

interface TrendingCard {
  icon?: string | StaticImageData
  title?: string
}

const TrendingCardWrapper = styled.div`
  width: auto;
  height: 200px;
`

const TrendingCard = ({ icon, title }: TrendingCard) => {
  return (
    <TrendingCardWrapper>
      <Paper radius="md" shadow="xs" p="sm">
        <Group position="apart" noWrap>
          <Group position="left" noWrap>
            {icon && <Image src={icon} width={20} height={20} alt="logo" />}
            <p style={{ fontWeight: 'bold' }}>{title}</p>
          </Group>
          <MoreButton />
        </Group>

        <Group>1</Group>

        <Group>2</Group>

        <Group>3</Group>
      </Paper>
    </TrendingCardWrapper>
  )
}

export default TrendingCard

import { Group, Paper } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styled from 'styled-components'
import MoreButton from '../../Common/MoreButton'
import TrendingCardRow from './TrendingCardRow'

import btc from '../../../assets/btc.png'
import usdt from '../../../assets/usdt.png'

interface TrendingCard {
  icon?: string | StaticImageData
  title?: string
}

const TrendingCardWrapper = styled.div`
  width: auto;
  height: 200px;
`

const trendingData = [
  {
    number: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: btc,
    isIncrement: true,
    rate: '2.34%',
  },
  {
    number: 2,
    symbol: 'USDT',
    name: 'Tether',
    icon: usdt,
    isIncrement: false,
    rate: '9.32%',
  },
  {
    number: 3,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: btc,
    isIncrement: true,
    rate: '2.34%',
  },
]

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
        {trendingData.map((item, index) => {
          return (
            <TrendingCardRow
              key={index}
              number={item.number}
              symbol={item.symbol}
              name={item.name}
              icon={item.icon}
              isIncrement={item.isIncrement}
              rate={item.rate}
            />
          )
        })}
      </Paper>
    </TrendingCardWrapper>
  )
}

export default TrendingCard

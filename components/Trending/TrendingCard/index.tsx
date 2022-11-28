import { Card, Group, Center } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styled from 'styled-components'
import MoreButton from '../../Common/MoreButton'
import TrendingCardRow from './TrendingCardRow'
import btc from '../../../assets/btc.png'
import usdt from '../../../assets/usdt.png'
import CardWrapper from '../../Common/CardWrapper'

interface TrendingCard {
  icon?: string | StaticImageData
  title?: string
}

const TrendingCardWrapper = styled.div`
  width: 448px;
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
    <div>
      <TrendingCardWrapper>
        <CardWrapper>
          <Card.Section>
            <Group position="apart" noWrap ml="xs" mr="xs">
              <Center>
                {icon && <Image src={icon} width={20} height={20} alt="logo" />}
                &nbsp;&nbsp;
                <p style={{ fontWeight: 'bold' }}>{title}</p>
              </Center>
              <MoreButton />
            </Group>
          </Card.Section>
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
        </CardWrapper>
      </TrendingCardWrapper>
    </div>
  )
}

export default TrendingCard

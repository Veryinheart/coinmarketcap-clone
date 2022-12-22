import { Card, Group, Center } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styled from 'styled-components'
import MoreButton from '../../Common/MoreButton'
import TrendingCardRow, { TrendingCardRowData } from './TrendingCardRow'
// import btc from '../../../assets/btc.png'
// import usdt from '../../../assets/usdt.png'
import CardWrapper from '../../Common/CardWrapper'

interface TrendingCard {
  icon?: string | StaticImageData
  title?: string
  data?: TrendingCardRowData[]
}

const TrendingCardWrapper = styled.div`
  width: 448px;
  height: 200px;
`

const TrendingCard = ({ icon, title, data }: TrendingCard) => {
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
          {data &&
            data?.map((item, index) => {
              return title === 'Trending' ? (
                <TrendingCardRow
                  key={index}
                  number={item.number}
                  symbol={item.symbol}
                  name={item.name}
                  icon={item.icon}
                  isIncrement={item.isIncrement}
                  rate={item.rate}
                  price={item.price}
                />
              ) : (
                <TrendingCardRow
                  key={index}
                  number={item.number}
                  symbol={item.symbol}
                  name={item.name}
                  icon={item.icon}
                  isIncrement={item.isIncrement}
                  price={item.price}
                />
              )
            })}
        </CardWrapper>
      </TrendingCardWrapper>
    </div>
  )
}

export default TrendingCard

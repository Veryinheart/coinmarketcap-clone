import React from 'react'
import { StaticImageData } from 'next/image'
import styled from 'styled-components'
import Image from 'next/image'
import Rate from '../../../Common/Rate'
import Currency from '../../../Common/Currency'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  font-size: 12px;
`
export interface TrendingCardRowData {
  number?: number
  icon?: string | StaticImageData
  name?: string
  symbol?: string
  isIncrement?: boolean | undefined
  rate?: string
  price?: string | number
}

const TrendingCardRow = ({
  number,
  icon,
  name,
  symbol,
  isIncrement,
  rate,
  price,
}: TrendingCardRowData) => {
  return (
    <Wrapper>
      <Wrapper>
        <b style={{ opacity: '0.4' }}>{number}</b>
        &nbsp;&nbsp;&nbsp;
        {icon && <Image alt="icon" src={icon} width={16} height={16} />}
        &nbsp;&nbsp;
        <b>
          {name} &nbsp;
          <span style={{ color: '#9CA3AF' }}> {symbol?.toUpperCase()}</span>
        </b>
      </Wrapper>
      {rate ? (
        <Rate isIncrement={isIncrement} rate={rate} />
      ) : (
        <Currency isIncrement={isIncrement} price={price} />
      )}
    </Wrapper>
  )
}

export default TrendingCardRow

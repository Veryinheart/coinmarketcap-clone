import React from 'react'
import { StaticImageData } from 'next/image'
import styled from 'styled-components'
import Image from 'next/image'
import Rate from '../../../Common/Rate'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  font-size: 12px;
`
interface TrendingCardRowData {
  number?: number
  icon?: string | StaticImageData
  name?: string
  symbol?: string
  isIncrement?: boolean | undefined
  rate?: string
}

const TrendingCardRow = ({
  number,
  icon,
  name,
  symbol,
  isIncrement,
  rate,
}: TrendingCardRowData) => {
  return (
    <Wrapper>
      <Wrapper>
        <b style={{ opacity: '0.4' }}>{number}</b>
        &nbsp;&nbsp;
        {icon && <Image alt="icon" src={icon} width={16} height={16} />}
        &nbsp;
        <b>
          {name}
          <span style={{ color: '#9CA3AF' }}> {symbol}</span>
        </b>
      </Wrapper>
      <Rate isIncrement={isIncrement} rate={rate} />
    </Wrapper>
  )
}

export default TrendingCardRow

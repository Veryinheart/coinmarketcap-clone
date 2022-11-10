import React from 'react'
import { StaticImageData } from 'next/image'
import styled from 'styled-components'
import Image from 'next/image'
import Rate from '../../../Common/Rate'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  color: 0.93rem;
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
      <p style={{ opacity: '0.4' }}>{number}</p>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ margin: '1.25rem 0' }}>
          {icon && <Image alt="" src={icon} width={20} height={20} />}
        </div>
        <p>
          {name}
          <span style={{ color: '#9CA3AF' }}> {symbol}</span>
        </p>
        <Rate isIncrement={isIncrement} rate={rate} />
      </div>
    </Wrapper>
  )
}

export default TrendingCardRow

import React from 'react'
import { StaticImageData } from 'next/image'
import styled from 'styled-components'

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
  symbol?: string | StaticImageData
  isIncrement?: boolean
  rate?: number
}

const TrendingCardRow = ({}: // number,
// icon,
// name,
// symbol,
// isIncrement,
// rate,
TrendingCardRowData) => {
  return (
    <Wrapper>
      {/* <p style={{ opacity: '0.4' }}>{number}</p>
      <div className="w-full flex">
        <div className="mx-5">
          {icon && <Image alt="" src={icon} width={20} height={20} />}
        </div>
        <p className="font-bold">
          {name}
          <span className="text-gray-400"> {symbol}</span>
        </p>
        <Rate isIncrement={isIncrement} rate={rate} />
      </div> */}
    </Wrapper>
  )
}

export default TrendingCardRow

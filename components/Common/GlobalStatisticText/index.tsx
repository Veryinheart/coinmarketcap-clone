import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 12px;
  line-height: 1.55em;
  font-weight: 500;
`
interface GlobalData {
  name: string
  data: string | number
}

const GlobalStatisticText = ({ name, data }: GlobalData) => {
  return (
    <Wrapper>
      <span style={{ color: '#868E96' }}>{name}: </span>
      <span style={{ color: '#3861FB' }}>{data}</span>
    </Wrapper>
  )
}

export default GlobalStatisticText

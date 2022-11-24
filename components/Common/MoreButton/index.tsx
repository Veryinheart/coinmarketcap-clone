import React from 'react'
import RightArrow from '../../../assets/svg/rightArrow'
import styled from 'styled-components'

const MoreButtonWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #6188ff;
  font-size: 12px;
`

const MoreButton = () => {
  return (
    <MoreButtonWrapper>
      <b>More </b>
      <RightArrow />
    </MoreButtonWrapper>
  )
}

export default MoreButton

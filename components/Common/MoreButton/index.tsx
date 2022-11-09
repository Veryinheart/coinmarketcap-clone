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
`

const MoreButton = () => {
  return (
    <MoreButtonWrapper>
      More <RightArrow />
    </MoreButtonWrapper>
  )
}

export default MoreButton

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Text } from '@mantine/core'
import ThemePicker from '../ThemePicker/index'

const HeaderContainer = styled.div`
  color: #ffffff;
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 30px;
`
const HeaderWrapper = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;
  max-width: auto;
  height: 100%;
`
const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const NavItem = styled.div`
  position: relative;
  margin-right: 0.25rem;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    color: #6188ff;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        width={240}
        height={240}
      />
      <HeaderWrapper>
        <Nav>
          <NavItem>
            <Text>Cryptocurrencies</Text>
          </NavItem>
          <NavItem>
            <Text>Exchange</Text>
          </NavItem>
          <NavItem>
            <Text>Community</Text>
          </NavItem>
          <NavItem>
            <Text>Products</Text>
          </NavItem>
          <NavItem>
            <Text>Learn</Text>
          </NavItem>
        </Nav>
        <ThemePicker />
        <Text>Learn</Text>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header

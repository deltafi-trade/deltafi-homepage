import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import LaunchApp from './LaunchApp'
import LinkList from './LinkList'
import DarkMode from './DarkMode'

import useTheme from 'hooks/useTheme'
import { HOMEPAGE_LINK } from 'config/constants/constant'

import { Menu } from 'components'

const FlexWrapper = styled.div`
	flex: 1;
  display: flex;
  align-items: center;
	justify-content: space-between;
	margin: 16px 0;
	padding-left: 16px;
  padding-right: 16px;
  font-family: 'Inter', sans-serif;

  ${({ theme }) => theme.mediaQueries.md} {
		margin: 24px 0;
    padding-left: 76px;
    padding-right: 76px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
		margin: 24px 0;
    padding-left: 200px;
    padding-right: 200px;
  }
`
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
  background: transparent;
  z-index: 100;
  position: fixed;
  width: 100%;
  top: 0;
`
const StyledDiv = styled.div`
	display: flex;
	align-items: center;
`
const DesktopDiv = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
		display: flex;
  }
`
const MobileDiv = styled.div`
  display: flex;
  ${({ theme }) => theme.mediaQueries.lg} {
		display: none;
  }
`

const Header: React.FC = () => {
	const { isDark, toggleTheme } = useTheme()

  return (
		<Container>
			<FlexWrapper>
				<Logo href={HOMEPAGE_LINK} isDark={isDark}/>
				<StyledDiv>
					<LinkList isDark={isDark}/>
					<DarkMode toggleTheme={toggleTheme} isDark={isDark}/>
          <DesktopDiv>
					  <LaunchApp primary="primary"/>
          </DesktopDiv > 
          <MobileDiv>
            <Menu isDark={isDark}/>
          </MobileDiv>
				</StyledDiv>
			</FlexWrapper>
		</Container>
  )
}

export default Header

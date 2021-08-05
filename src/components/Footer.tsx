import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import LaunchApp from './LaunchApp'
import LinkList from './LinkList'
import DarkMode from './DarkMode'
import useTheme from 'hooks/useTheme'
import { HOMEPAGE_LINK } from 'config/constants/constant'

const FlexWrapper = styled.div`
	flex: 1;
  display: flex;
  align-items: center;
	justify-content: space-between;
	margin: 16px 0;
	padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
		margin: 24px 0;
    padding-left: 24px;
    padding-right: 24px;
		max-width: 1500px;
  }
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
`

const Footer: React.FC = () => {
	const { isDark, toggleTheme } = useTheme()

  return (
		<Container>
			<FlexWrapper>
				<Logo href={HOMEPAGE_LINK} isDark={isDark}/>
				<StyledDiv>
					<LinkList isDark={isDark}/>
					<DarkMode toggleTheme={toggleTheme} isDark={isDark}/>
					<LaunchApp />
				</StyledDiv>
			</FlexWrapper>
		</Container>
  )
}

export default Footer

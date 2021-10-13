import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppBar, Container, Toolbar } from '@material-ui/core'

import Logo from './Logo'
import LaunchApp from './LaunchApp'
import LinkList from './LinkList'
import DarkMode from './DarkMode'

import { HOMEPAGE_LINK } from 'config/constants/constant'

import { Menu } from 'components'
import useDarkMode from 'hooks/useDarkMode'
// import Container from './layout/Container'

interface ContainerProps {
  theme: any
  isShrunk: boolean
}

const HeaderWrapper = styled(AppBar)<ContainerProps>`
  background-color: ${({ theme, isShrunk }) => (isShrunk ? theme.palette.primary.main : 'none')};
`
const FlexWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 9px 0;
  font-family: 'Inter', sans-serif;
  padding: 0 24px;

  ${({ theme }) => theme.muibreakpoints.up('md')} {
    margin: 24px 0;
    padding: 0;
  }
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`
const DesktopSection = styled.div`
  display: none;
  ${({ theme }) => theme.muibreakpoints.up('md')} {
    display: flex;
  }
`
const MobileSection = styled.div`
  display: flex;
  ${({ theme }) => theme.muibreakpoints.up('md')} {
    display: none;
  }
`

const Header: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode()
  const [isShrunk, setShrunk] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (!isShrunk && (document.body.scrollTop > 98 || document.documentElement.scrollTop > 98)) {
          return true
        }

        if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
          return false
        }

        return isShrunk
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <HeaderWrapper position="fixed" color="transparent" isShrunk={isShrunk}>
      <Container>
        <Toolbar>
          <Logo href={HOMEPAGE_LINK} isDark={isDark} />
          <DesktopSection>
            <LinkList isDark={isDark} />
            <DarkMode toggleDarkMode={toggleDarkMode} isDark={isDark} />
          </DesktopSection>
          <MobileSection>
            <Menu isDark={isDark} />
          </MobileSection>
        </Toolbar>
        {/* <FlexWrapper>
          <StyledDiv>
            <LinkList isDark={isDark} />
            <DarkMode toggleDarkMode={toggleDarkMode} isDark={isDark} />
            <DesktopDiv>
              <LaunchApp primary="primary" />
            </DesktopDiv>
            <MobileDiv>
              <Menu isDark={isDark} />
            </MobileDiv>
          </StyledDiv>
        </FlexWrapper> */}
      </Container>
    </HeaderWrapper>
  )
}

export default Header

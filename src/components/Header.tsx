import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppBar, Container, Toolbar } from '@material-ui/core'

import Logo from './Logo'
import LinkList from './LinkList'

import { HOMEPAGE_LINK } from 'config/constants/constant'

import { LaunchButton, Menu, ThemeButton } from 'components'
import useDarkMode from 'hooks/useDarkMode'

interface ContainerProps {
  theme: any
  isShrunk: boolean
}

const HeaderWrapper = styled(AppBar)<ContainerProps>`
  background-color: ${({ theme, isShrunk }) => (isShrunk ? theme.palette.background.primary : 'none')};
  box-shadow: none;

  .theme-button {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
`
const DesktopSection = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    display: none;
  }
`
const FlexGrow = styled.div`
  flex-grow: 1;
`
const MobileSection = styled.div`
  display: none;
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    display: flex;
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
        <Toolbar disableGutters>
          <Logo href={HOMEPAGE_LINK} isDark={isDark} />
          <FlexGrow />
          <LinkList />
          <ThemeButton toggleDarkMode={toggleDarkMode} isDark={isDark} className="theme-button" />
          <DesktopSection>
            <LaunchButton color="primary" />
          </DesktopSection>
          <MobileSection>
            <Menu />
          </MobileSection>
        </Toolbar>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

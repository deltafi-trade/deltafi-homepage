import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppBar, Container, makeStyles, Toolbar, Theme } from '@material-ui/core'

import Logo from './Logo'
import LinkList from './LinkList'

import { APP_LINK, HOMEPAGE_LINK } from 'config/constants/constant'

import { Button, Menu, ThemeButton } from 'components'
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
`;

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
const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Header: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode()
  const [isShrunk, setShrunk] = useState(false)
  const classes = useStyles();

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
        <Toolbar disableGutters className={classes.toolbar}>
          <Logo href={HOMEPAGE_LINK} isDark={isDark} />
          <LinkList />
          <DesktopSection>
            <Button color="primary" href={APP_LINK}>REQUEST A DEMO</Button>
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

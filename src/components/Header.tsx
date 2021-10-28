import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppBar, Container, makeStyles, Toolbar, Theme } from '@material-ui/core'

import Logo from './Logo'
import LinkList from './LinkList'

import { HOMEPAGE_LINK } from 'config/constants/constant'

import { Button, Menu, ThemeButton } from 'components'
import useDarkMode from 'hooks/useDarkMode'

interface ContainerProps {
  theme: any
  isShrunk: boolean
}

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
  headerWrapper: {
    boxShadow: 'none',
  
    '$.theme-button': {
      marginLeft: theme.spacing(1),
    }
  },
  toolbar: {},
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
    <AppBar position="fixed" color="transparent" className={classes.headerWrapper}>
      <Container>
        <Toolbar disableGutters className={classes.toolbar}>
          <Logo href={HOMEPAGE_LINK} isDark={isDark} />
          <FlexGrow />
          <LinkList />
          <ThemeButton toggleDarkMode={toggleDarkMode} isDark={isDark} className="theme-button" />
          <DesktopSection>
            <Button color="primary">REQUEST A DEMO</Button>
          </DesktopSection>
          <MobileSection>
            <Menu />
          </MobileSection>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

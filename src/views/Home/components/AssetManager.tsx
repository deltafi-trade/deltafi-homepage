import React from 'react'
import styled from 'styled-components'
import { Container, Grid, Theme, Typography } from '@material-ui/core'

import { Button } from 'components'

import useDarkMode from 'hooks/useDarkMode'
import { makeStyles } from '@material-ui/styles'
import { APP_LINK } from 'config/constants/constant'

interface ContainerProps {
  isDark: boolean
}

const Main = styled.div<ContainerProps>``

const StyledDiv = styled(Container)`
  display: flex;
  align-items: center;
  min-height: 100vh;
  max-width: 652px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .asset-title {
    font-weight: 600;
  }

  img {
    max-width: 100%;

    ${({ theme }) => theme.muibreakpoints.down('md')} {
      max-height: 328px;
    }
    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      max-height: none;
    }
  }
`
const DesktopWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    display: none;
  }
`

const useStyles = makeStyles(({ palette }: Theme) => ({
  title: {
    fontSize: '78px',
    lineHeight: '80px',
  },
  subTitle: {
    maxWidth: '526px',
  },
}))

const AssetManager: React.FC = () => {
  const { isDark } = useDarkMode()
  const classes = useStyles()

  return (
    <Main isDark={isDark}>
      <StyledDiv>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item sm={12} md={12}>
            <Wrapper>
              <img src="/images/poweredby.png" alt="Powered by solala" />
              <br />
              <Typography variant="h2" align="center" className={classes.title}>
                The world’s most efficient DEX
              </Typography>
              <br />
              <Typography variant="h5" align="center" paragraph className={classes.subTitle}>
                High Yields, Deep Liquidity, and DAO Governed
              </Typography>
              <DesktopWrapper>
                <Button color="secondary" href={APP_LINK}>
                  REQUEST A DEMO
                </Button>
              </DesktopWrapper>
            </Wrapper>
          </Grid>
        </Grid>
      </StyledDiv>
    </Main>
  )
}

export default AssetManager

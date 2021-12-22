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
  max-width: 738px;
  padding-top: 125px;
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    padding-top: 65px;
  }
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

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '3.25rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
  },
  subTitle: {
    maxWidth: '600px',
  },
  poweredby: {
    height: 18,
    marginBottom: 18,
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
              <img src="/images/homepage/solana.png" alt="Powered by solala" className={classes.poweredby} />
              <Typography variant="h1" align="center" className={classes.title}>
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

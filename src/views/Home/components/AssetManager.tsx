import React from 'react'
import styled from 'styled-components'
import { Container, Grid, Typography } from '@material-ui/core'

import { LaunchButton } from 'components'

import useDarkMode from 'hooks/useDarkMode'

interface ContainerProps {
  isDark: boolean
}

const Main = styled.div<ContainerProps>`
  background-image: ${({ theme }) => theme.palette.background.cta};
  background-size: cover;
`

const StyledDiv = styled(Container)`
  display: flex;
  align-items: center;
  min-height: 100vh;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .asset-title {
    font-family: DM Sans;
    font-weight: bold;
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
const MobileWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacing(4)}px;
  }
`
const DesktopWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    display: none;
  }
`

const AssetManager: React.FC = () => {
  const { isDark } = useDarkMode()

  return (
    <Main isDark={isDark}>
      <StyledDiv>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item sm={12} md={6}>
            <Wrapper>
              <Typography variant="subtitle1" paragraph>
                POWERED BY SOLANA
              </Typography>
              <Typography variant="h1" color="primary" className="asset-title">
                Trade
              </Typography>
              <Typography variant="h2" gutterBottom>
                Everything
              </Typography>
              <Typography variant="h4" align="center" paragraph>
                Lightning speed and DAO governed
              </Typography>
              <DesktopWrapper>
                <LaunchButton cta color="secondary" />
              </DesktopWrapper>
            </Wrapper>
          </Grid>
          <Grid item sm={12} md={6}>
            <Wrapper>
              <MobileWrapper>
                <LaunchButton cta color="secondary" />
              </MobileWrapper>
              <img src="/images/asset.png" alt="asset" />
            </Wrapper>
          </Grid>
        </Grid>
      </StyledDiv>
    </Main>
  )
}

export default AssetManager

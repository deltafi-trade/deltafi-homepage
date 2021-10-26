import React from 'react'
import styled from 'styled-components'

import { LaunchButton, BoundedLiquidityIcon, CrossChainIcon, IntelligentMarketIcon } from 'components'

import useDarkMode from 'hooks/useDarkMode'
import { Container, Grid, Typography } from '@material-ui/core'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 98px 0 60px;
  text-align: center;
  font-family: DM Sans;

  .subtitle {
    color: #949292;
  }
  .deposit-text {
    margin-top: 48px;
  }

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    padding: 56px 0 36px;
    .deposit-text {
      margin-top: 32px;
    }
  }
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    padding: 38px 0 24px;
    .deposit-text {
      margin-top: 24px;
    }
  }
`
const Card = styled(Grid)`
  display: flex;
  height: 600px;
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: 20px;
  flex-direction: row;

  .card-title {
    font-family: DM Sans;
    font-weight: bold;
    max-width: 40%;

    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      max-width: 50%;
    }
  }
  .card-content {
    max-width: 70%;
  }

  ${({ theme }) => theme.muibreakpoints.down('lg')} {
    height: 530px;
  }
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    height: 450px;
  }
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    border-radius: 10px;
    flex-direction: column;
    height: 500px;
  }
`
const DesktopDiv = styled.div`
  display: flex;
  order: 2;
  width: 50%;
  height: 100%;
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    display: none;
  }
`
const MobileDiv = styled.div`
  display: none;
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    order: 1;
    width: 100%;
    height: 45%;
    display: flex;
  }
`
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0 20px 20px 0;
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    border-radius: 10px 10px 0 0;
  }
`
const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  width: 50%;
  height: 100%;
  order: 1;
  border-radius: 20px 0 0 20px;

  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    order: 2;
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 55%;
  }

  svg {
    width: 80px;
    ${({ theme }) => theme.muibreakpoints.down('lg')} {
      width: 70px;
    }
    ${({ theme }) => theme.muibreakpoints.down('md')} {
      width: 50px;
    }
    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      width: 40px;
    }
  }
`

const DeltaFi: React.FC = () => {
  const { isDark } = useDarkMode()
  const CARD_LIST = [
    {
      icon: <IntelligentMarketIcon width="70" color={isDark ? '#FFFFFF' : '#000000'} />,
      title: `Intelligent Market Making`,
      content: 'Adaptive algorithms are developed for efficient pricing under various market dynamics.',
      image: isDark ? '/images/intelligent-market-making-dark.png' : '/images/intelligent-market-making-light.png',
      imageMobile: isDark
        ? '/images/intelligent-market-making-mobile-dark.png'
        : '/images/intelligent-market-making-mobile-light.png',
    },
    {
      icon: <CrossChainIcon width="70" color={isDark ? '#FFFFFF' : '#000000'} />,
      title: 'Cross Chain Trading',
      content: 'Ease of trading for any token builds the liquidity hub and optimal user experience.',
      image: isDark ? '/images/cross-chain-trading-dark.png' : '/images/cross-chain-trading-light.png',
      imageMobile: isDark
        ? '/images/cross-chain-trading-mobile-dark.png'
        : '/images/cross-chain-trading-mobile-light.png',
    },
    {
      icon: <BoundedLiquidityIcon width="70" color={isDark ? '#FFFFFF' : '#000000'} />,
      title: 'Bounded Liquidity Risk',
      content: 'Provisioned liquidity is protected from impermanent loss despite market volatilities.',
      image: isDark ? '/images/bounded-liquidity-risk-dark.png' : '/images/bounded-liquidity-risk-light.png',
      imageMobile: isDark
        ? '/images/bounded-liquidity-risk-mobile-dark.png'
        : '/images/bounded-liquidity-risk-mobile-light.png',
    },
  ]

  return (
    <Container>
      <StyledDiv>
        <Typography color="primary" variant="h6" paragraph>
          HIGHER EFFICIENCY, LOWER SLIPPAGE
        </Typography>
        <Typography variant="h5">DeltaFi optimizes capital efficiency with zero slippage,</Typography>
        <Typography color="inherit" variant="h5" paragraph className="subtitle">
          while minimizing impermanent loss.
        </Typography>
        <Grid container spacing={3}>
          {CARD_LIST.map((card, index) => (
            <Grid item key={`card-${index}`} xs={12}>
              <Card>
                <CustomDiv>
                  <Typography paragraph>{card.icon}</Typography>
                  <Typography variant="h6" paragraph className="card-title">
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph className="card-content">
                    {card.content}
                  </Typography>
                </CustomDiv>
                <DesktopDiv>
                  <Img src={card.image} alt="Yields" />
                </DesktopDiv>
                <MobileDiv>
                  <Img src={card.imageMobile} alt="Yields" />
                </MobileDiv>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" paragraph className="deposit-text">
          Deposit and Earn!
        </Typography>
        <LaunchButton cta />
      </StyledDiv>
    </Container>
  )
}

export default DeltaFi

import React from 'react'
import styled from 'styled-components'

import useDarkMode from 'hooks/useDarkMode'
import { Container, Grid, Typography } from '@material-ui/core'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 98px 0 60px;
  text-align: center;

  .subtitle {
    margin-top: 16px;
    margin-bottom: 68px;
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
    font-weight: bold;

    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      max-width: 50%;
    }
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
const DesktopDiv = styled.div<{ bg: string }>`
  display: flex;
  order: 2;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bg};
  border-top-right-radius: 18.1159px;
  border-bottom-right-radius: 18.1159px;
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    display: none;
  }
`
const MobileDiv = styled.div<{ bg: string }>`
  display: none;
  border-top-right-radius: 18.1159px;
  border-top-left-radius: 18.1159px;
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    order: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.bg};
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
const Img = styled.img`
  max-width: 329px;
  max-height: 212px;
  object-fit: cover;
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    border-radius: 10px 10px 0 0;
  }
`
const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  text-align: start;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  width: 50%;
  height: 100%;
  order: 1;
  border-radius: 20px 0 0 20px;
  padding: 109.52px 54.35px;

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
      icon: <img src="/images/homepage/intelligent-market.svg" alt="Intelligent Market Making" />,
      title: `Intelligent Market Making`,
      content: 'Adaptive algorithms are developed for efficient pricing under various market dynamics.',
      image: isDark
        ? '/images/homepage/intelligent-market-desktop1.png'
        : '/images/homepage/intelligent-market-desktop1.png',
      imageMobile: isDark
        ? '/images/intelligent-market-making-mobile-dark.png'
        : '/images/intelligent-market-making-mobile-light.png',
      background: 'linear-gradient(314.49deg, #434BFF 0%, #FF4B81 97.42%)',
    },
    {
      icon: <img src="/images/homepage/exchange.svg" alt="Cross Chain Trading" />,
      title: 'Cross Chain Trading',
      content: 'Ease of trading for any token builds the liquidity hub and optimal user experience.',
      image: isDark
        ? '/images/homepage/intelligent-market-desktop1.png'
        : '/images/homepage/intelligent-market-desktop1.png',
      imageMobile: isDark
        ? '/images/cross-chain-trading-mobile-dark.png'
        : '/images/cross-chain-trading-mobile-light.png',
      background: 'linear-gradient(134.99deg, #94CB90 1.39%, #7061A3 109.29%)',
    },
    {
      icon: <img src="/images/homepage/chart.svg" alt="Bounded Liquidity Risk" />,
      title: 'Bounded Liquidity Risk',
      content: 'Provisioned liquidity is protected from impermanent loss despite market volatilities.',
      image: isDark
        ? '/images/homepage/intelligent-market-desktop1.png'
        : '/images/homepage/intelligent-market-desktop1.png',
      imageMobile: isDark
        ? '/images/bounded-liquidity-risk-mobile-dark.png'
        : '/images/bounded-liquidity-risk-mobile-light.png',
      background: 'linear-gradient(314.49deg, #E2CE85 0%, #FE316F 97.42%)',
    },
  ]

  return (
    <Container>
      <StyledDiv>
        <Typography color="primary" variant="h6" paragraph>
          OUR MISSION
        </Typography>
        <Typography variant="h2">The DEX built for traders, market makers, and liquidity providers</Typography>
        <Typography color="inherit" variant="h5" paragraph className="subtitle">
          Machine Learning Design, Optimal User Experience
        </Typography>
        <Grid container spacing={3}>
          {CARD_LIST.map((card, index) => (
            <Grid item key={`card-${index}`} xs={12}>
              <Card>
                <MobileDiv bg={card.background}>
                  <Img src={card.image} alt="Yields" />
                </MobileDiv>
                <CustomDiv>
                  <Typography paragraph>{card.icon}</Typography>
                  <Typography variant="h4" paragraph className="card-title">
                    {card.title}
                  </Typography>
                  <Typography variant="h6" paragraph className="card-content">
                    {card.content}
                  </Typography>
                </CustomDiv>
                <DesktopDiv bg={card.background}>
                  <Img src={card.image} alt="Yields" />
                </DesktopDiv>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledDiv>
    </Container>
  )
}

export default DeltaFi

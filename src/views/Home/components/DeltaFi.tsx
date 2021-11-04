import React from 'react'
import styled from 'styled-components'

import useDarkMode from 'hooks/useDarkMode'
import { Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core'

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
  height: 400px;
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: 20px;
  flex-direction: row;

  .card-title {
    font-weight: bold;

    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      max-width: 80%;
      font-size: 24px;
      text-align: center;
    }
  }

  .card-content {
    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      text-align: center;
    }
  }

  ${({ theme }) => theme.muibreakpoints.down('lg')} {
    height: 400px;
  }
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    height: 400px;
  }
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    border-radius: 10px;
    flex-direction: column;
    height: auto;
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
    padding: 50px 20px;
    min-height: 240px;
  }

  img {
    max-width: 250px;
  }
`
const Img = styled.img`
  width: 342px;
  height: auto;
  object-fit: cover;
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    border-radius: 10px 10px 0 0;
  }

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    max-width: 229px;
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
  padding: 0 60px;

  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    order: 2;
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 55%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
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

const useStyles = makeStyles(( theme: Theme) => ({
  title: {
    maxWidth: 850,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      padding: '10px'
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: '15px'
    },
    [theme.breakpoints.up("md")]: {
      padding: '20px 40px'
    },
  },
}))

const DeltaFi: React.FC = () => {
  const { isDark } = useDarkMode()
  const classes = useStyles()

  const CARD_LIST = [
    {
      header: 'FOR TRADERS',
      title: 'Low Price Slippage',
      content: 'Adaptive algorithms are developed for efficient pricing resilient to various market dynamics.',
      image: isDark
        ? '/images/homepage/swap.png'
        : '/images/homepage/swap.png',
      imageMobile: isDark
        ? '/images/bounded-liquidity-risk-mobile-dark.png'
        : '/images/bounded-liquidity-risk-mobile-light.png',
      background: 'linear-gradient(314.49deg, #434BFF 0%, #FF4B81 97.42%)',
    },
    {
      header: 'FOR LIQUIDITY PRODVIDERS',
      title: 'Sustainable Profitability',
      content: 'Liquidity risks are minimized with customized risk tolerances and institutional grade market making algorithms.',
      image: isDark
        ? '/images/homepage/stake.png'
        : '/images/homepage/stake.png',
      imageMobile: isDark
        ? '/images/cross-chain-trading-mobile-dark.png'
        : '/images/cross-chain-trading-mobile-light.png',
      background: 'linear-gradient(134.99deg, #94CB90 1.39%, #7061A3 109.29%)',
    },
    {
      header: 'FOR MARKET MAKERS',
      title: 'Personalized Pools',
      content: 'Malleable APIs offer market making flexibilities with bidirectional pricing, dynamic fees, and order history.',
      image: isDark
        ? '/images/homepage/deposit.png'
        : '/images/homepage/deposit.png',
      imageMobile: isDark
        ? '/images/intelligent-market-making-mobile-dark.png'
        : '/images/intelligent-market-making-mobile-light.png',
      background: 'linear-gradient(314.49deg, #E2CE85 0%, #FE316F 97.42%)',
    },
  ]

  return (
    <Container>
      <StyledDiv>
        <Typography color="primary" variant="h6" paragraph>
          OUR MISSION
        </Typography>
        <Typography variant="h2" className={classes.title}>Built for traders, liquidity providers and market makers</Typography>
        <Typography color="inherit" variant="h5" paragraph className="subtitle">
          Optimal User Experience
        </Typography>
        <Grid container spacing={10} className={classes.gridContainer} >
          {CARD_LIST.map((card, index) => (
            <Grid item key={`card-${index}`} xs={12}>
              <Card>
                <MobileDiv bg={card.background}>
                  <Img src={card.image} alt="Yields" />
                </MobileDiv>
                <CustomDiv>
                  <Typography variant="h6" paragraph color="primary">{card.header}</Typography>
                  <Typography variant="h4" paragraph className="card-title">
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph className="card-content">
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

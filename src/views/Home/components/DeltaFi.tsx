import React from 'react'
import styled from 'styled-components'

import useDarkMode from 'hooks/useDarkMode'
import { Container, Box, Grid, makeStyles, Theme, Typography } from '@material-ui/core'

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
  height: 280px;
  box-shadow: 2px 1000px 1px ${({ theme }) => theme.palette.background.primary} inset;
  border-radius: 10px;
  background-image: linear-gradient(52.7deg, #1afa9a -3.73%, #478ef0 48.34%, #9945fd 93.4%);
  border: 1px solid transparent;
  background-origin: border-box;

  .card-header {
    font-weight: normal;
    color: limegreen;
    line-height: 0;
    padding-top: 30px;
  }

  .card-title {
    font-weight: bold;
  }

  .card-content {
    font-weight: normal;
  }
`

const ColoredCard = styled(Grid)`
  height: 365px;
  box-shadow: 0px 0px 25px 10px rgba(118, 80, 245, 0.3);
  border-radius: 10px;
  background-image: linear-gradient(52.7deg, #1afa9a -3.73%, #478ef0 48.34%, #9945fd 93.4%);
  border: 1px solid transparent;
  background-origin: border-box;

  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    height: 230px;
    box-shadow: 0px 0px 10px 8px rgba(118, 80, 245, 0.3);
  }

  .card-header {
    font-weight: bold;
    font-size: 29px;
    line-height: 0;
    padding-top: 35px;
    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      font-size: 19px;
      padding-top: 17px;
    }
  }

  .card-title {
    font-weight: normal;
    padding-top: 10px;
    font-size: 22px;
    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      font-size: 15px;
      padding-top: 0px;
    }
  }
`

const Img = styled.img`
  width: 250px;
  height: auto;
  object-fit: cover;
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    width: 150px;
  }
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    max-width: 229px;
  }
`

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    maxWidth: 850,
    marginBottom: 10,
    fontWeight: 500,
    fontSize: 37,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      width: '85%',
    },
  },
  header: {
    paddingTop: 140,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      fontWeight: 'normal',
    },
  },
  cardGrid: {
    paddingTop: 40,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 60,
    },
  },
}))

const DeltaFi: React.FC = () => {
  const { isDark } = useDarkMode()
  const classes = useStyles()

  const MISSION_LIST = [
    {
      header: 'FOR TRADERS',
      title: 'Low Price Slippage',
      content:
        'Adaptive machine learning algorithms are developed for efficient pricing resilient to various market dynamics.',
    },
    {
      header: 'FOR LIQUIDITY PRODVIDERS',
      title: 'Sustainable Profitability',
      content:
        'Liquidity risks are minimized with customized risk tolerances and institutional grade market making algorithms.',
    },
    {
      header: 'FOR MARKET MAKERS',
      title: 'Personalized Pools',
      content:
        'Malleable APIs offer market making flexibilities with bidirectional pricing, dynamic fees, and order history.',
    },
  ]

  const WHY_LIST = [
    {
      header: 'Institutional Grade Algorithms',
      title: 'Machine learning and beyond',
      image: '/images/homepage/globe.png',
    },
    {
      header: 'Community Driven Development',
      title: 'Fully decentralized',
      image: '/images/homepage/hand.png',
    },
  ]

  return (
    <Container>
      <StyledDiv>
        <Typography variant="h6" paragraph className={classes.header}>
          Our Mission
        </Typography>
        <Typography className={classes.title}>
          Built for traders, liquidity providers
          <br />
          and market makers
        </Typography>
        <Grid container spacing={5} className={classes.cardGrid}>
          {MISSION_LIST.map((card, index) => (
            <Grid item key={`card-${index}`} xs={"auto"} md={4}>
              <Card>
                <Box padding={3}>
                  <Typography align="left" paragraph className="card-header">
                    {card.header}
                  </Typography>
                  <Typography variant="h5" align="left" paragraph className="card-title">
                    {card.title}
                  </Typography>
                  <Typography variant="h6" align="left" paragraph className="card-content">
                    {card.content}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" paragraph className={classes.header}>
          Why DeltaFi?
        </Typography>
        <Typography className={classes.title}>High Yields, Deep Liquidity, and DAO Governed</Typography>
        <Grid container spacing={4} className={classes.cardGrid}>
          {WHY_LIST.map((card, index) => (
            <Grid item key={`card-${index}`} xs={12} md={6}>
              <ColoredCard>
                <Box padding={3}>
                  <Typography variant="h4" paragraph className="card-header">
                    {card.header}
                  </Typography>
                  <Typography variant="h5" paragraph className="card-title">
                    {card.title}
                  </Typography>
                  <Img src={card.image} />
                </Box>
              </ColoredCard>
            </Grid>
          ))}
        </Grid>
        {/* Video */}
      </StyledDiv>
    </Container>
  )
}

export default DeltaFi

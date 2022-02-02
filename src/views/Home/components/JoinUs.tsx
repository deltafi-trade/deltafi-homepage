import { Button as MUIButton, makeStyles, Theme, Typography, Container, Grid, Box } from '@material-ui/core'
import styled from 'styled-components'

import { Button } from 'components'
import { TWITTER_LINK, DISCORD_LINK, TELEGRAM_LINK, BLOG_LINK } from 'config/constants/constant'

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
  height: 230px;
  box-shadow: 2px 1000px 1px ${({ theme }) => theme.palette.background.primary} inset;
  border-radius: 10px;
  background-image: linear-gradient(52.7deg, #1afa9a -3.73%, #478ef0 48.34%, #9945fd 93.4%);
  border: 1px solid transparent;
  background-origin: border-box;

  .card-title {
    font-weight: bold;
    font-size: 20px;
  }
`

const InvestorCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
`

const Img = styled.img`
  margin-bottom: 10px;
  width: 60px;
  height: 50px;
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    border-radius: 10px 10px 0 0;
  }
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    max-width: 229px;
  }
`

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
  title: {
    maxWidth: 850,
    marginBottom: 10,
    fontWeight: 500,
    fontSize: 37,
  },
  button: {
    backgroundColor: `#7650F5`,
    color: palette.text.primary,
    borderRadius: 100,
    border: 'solid 1px transparent',
    backgroundOrigin: 'border-box',

    '&:hover': {
      backgroundColor: `#6d47ed`,
    },

    height: 43,
    width: 165,
    fontSize: 18,
    fontWeight: 500,
    textTransform: 'none',
  },
}))

const JoinUs = () => {
  const classes = useStyles()

  const MEDIA_LIST = [
    {
      img: '/images/SimpleTwitter.svg',
      title: 'Twitter',
      link: TWITTER_LINK,
    },
    {
      img: '/images/SimpleDiscord.svg',
      title: 'Discord',
      link: DISCORD_LINK,
    },
    {
      img: '/images/SimpleTelegram.svg',
      title: 'Telegram',
      link: TELEGRAM_LINK,
    },
    {
      img: '/images/SimpleMedium.svg',
      title: 'Medium',
      link: BLOG_LINK,
    },
  ]

  const INVESTOR_LIST = [
    {
      img: '/images/dark-jumpcaptal.png',
    },
    {
      img: '/images/dark-hashed.svg',
    },
    {
      img: '/images/dark-hashkey.svg',
    },
  ]

  return (
    <Container>
      <StyledDiv>
        <Typography className={classes.title}>Join Our Growing Community</Typography>
        <Grid container spacing={6} style={{ paddingTop: 40 }}>
          {MEDIA_LIST.map((card, index) => (
            <Grid item key={`card-${index}`} xs={3}>
              <Card>
                <Box padding={5}>
                  <Img src={card.img} />
                  <Typography variant="h5" align="center" paragraph className="card-title">
                    {card.title}
                  </Typography>
                  <MUIButton color="primary" href={card.link} className={classes.button}>
                    Follow
                  </MUIButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledDiv>
      <StyledDiv>
        <Typography className={classes.title}>Backed by World-class Investors</Typography>
        <Grid container spacing={1} style={{ paddingTop: 40 }}>
          {INVESTOR_LIST.map((card, index) => (
            <Grid item key={`card-${index}`} xs={4}>
              <InvestorCard>
                <Box padding={5}>
                  <img src={card.img}/>
                </Box>
              </InvestorCard>
            </Grid>
          ))}
        </Grid>
      </StyledDiv>
    </Container>
  )
}

export default JoinUs

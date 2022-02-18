import React from 'react'
import styled from 'styled-components'
import { Box, Container, Grid, Theme, Typography, Link } from '@material-ui/core'

import { Button, RewardButton } from 'components'

import useDarkMode from 'hooks/useDarkMode'
import { makeStyles } from '@material-ui/styles'

import { APP_LINK, REWARD_LINK, TWITTER_LINK, DISCORD_LINK, TELEGRAM_LINK, BLOG_LINK } from 'config/constants/constant'
import { TelegramIcon, DiscordIcon, TwitterIcon, MediumIcon } from 'components'

interface ContainerProps {
  isDark: boolean
}

const Main = styled.div<ContainerProps>``

const StyledDiv = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: 330px;
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    padding-top: 190px;
    padding-left: 20px;
  }
`
const Wrapper = styled.div`
  flex-direction: column;

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
  justify-content: space-between;
  max-width: 65%;
  margin-top: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
    max-width: 90%;
  }
`

const IconWrapper = styled.div`
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
    a {
      padding-right: 0;
    }
  }
`

const SocialLink = styled(Link)``

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    [theme.breakpoints.down('sm')]: {
      fontSize: 33,
    },
  },
  subTitle: {
    fontWeight: 'normal',
    maxWidth: '680px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%',
      fontSize: 16,
    },
  },
  poweredby: {
    height: 18,
    marginTop: 7,
    marginLeft: 15,
  },
  socialLinks: {
    paddingTop: 10,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '55%',
    },
  },
}))

const AssetManager: React.FC = () => {
  const { isDark } = useDarkMode()
  const classes = useStyles()

  return (
    <Main isDark={isDark}>
      <StyledDiv>
        <Grid container spacing={2}>
          <Wrapper>
            <Box display="flex" justifyContent="flex-start">
              <Typography variant="h6" paragraph className={classes.subTitle}>
                Built on
              </Typography>
              <img src="/images/homepage/solana.png" alt="Powered by solala" className={classes.poweredby} />
            </Box>
            <Typography variant="h1" className={classes.title}>
              The world’s most
              <br />
              efficient DEX
            </Typography>
            <br />
            <Typography variant="h6" className={classes.subTitle}>
              Machine learning algorithms empower efficient automated market making with zero price slippage, minimized
              liquidity risks and optimized capital efficiency.
            </Typography>
            <br />
            <DesktopWrapper>
              <Button color="secondary" href={APP_LINK}>
                Launch APP
              </Button>
              <RewardButton color="secondary" href={REWARD_LINK}>
                Invite and Earn
              </RewardButton>
            </DesktopWrapper>
            <br />
            <Box display="flex" className={classes.socialLinks}>
              <IconWrapper>
                <SocialLink href={TWITTER_LINK} target="_blank" rel="noreferrer noopener">
                  <TwitterIcon isDark={isDark} width="55px"/>
                </SocialLink>
              </IconWrapper>
              <IconWrapper>
                <SocialLink href={DISCORD_LINK} target="_blank" rel="noreferrer noopener">
                  <DiscordIcon isDark={isDark} width="55px"/>
                </SocialLink>
              </IconWrapper>
              <IconWrapper>
                <SocialLink href={TELEGRAM_LINK} target="_blank" rel="noreferrer noopener">
                  <TelegramIcon isDark={isDark} width="55px"/>
                </SocialLink>
              </IconWrapper>
              <IconWrapper>
                <SocialLink href={BLOG_LINK} target="_blank" rel="noreferrer noopener">
                  <MediumIcon isDark={isDark} width="55px"/>
                </SocialLink>
              </IconWrapper>
            </Box>
          </Wrapper>
        </Grid>
      </StyledDiv>
    </Main>
  )
}

export default AssetManager

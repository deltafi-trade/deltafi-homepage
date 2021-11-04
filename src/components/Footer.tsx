import React from 'react'
import styled from 'styled-components'
import { Grid, makeStyles, Theme, Typography, Link } from '@material-ui/core'

import Logo from './Logo'
import { TelegramIcon } from 'components'
import { StyledLink } from './LinkList'

import {
  HOMEPAGE_LINK,
  BLOG_LINK,
  TWITTER_LINK,
  GITHUB_LINK,
  DISCORD_LINK,
  TELEGRAM_LINK,
  WHITE_PAPER,
} from 'config/constants/constant'
import { GithubIcon, DiscordIcon, TwitterIcon, MediumIcon } from 'components'
import useDarkMode from 'hooks/useDarkMode'

const SiteMapWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  padding: ${({ theme }) => theme.spacing(6)}px;
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    display: none;
  }
`

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  order: 2;
  margin-bottom: 0;
  margin-bottom: 10px;

  .launch-button,
  .theme-button {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    order: 1;
    margin-bottom: 10px;
  }
`

const CopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.primary};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 24px 0;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    flex-direction: column;
  }
`

const CopyrightText = styled.div`
  margin-bottom: 20px;
  order: 3;
`

const IconWrapper = styled.div`
  min-width: 50px;
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

const SocialLink = styled(Link)`
`;

const useStyles = makeStyles(({ palette }: Theme) => ({
  row: {
    maxWidth: '1200px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  listTitle: {
    color: palette.text.secondary,
  },
  listItem: {
    padding: '0px !important',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  logo: {
    paddingTop: '12px', 
  },
  logoTitle: {
    maxWidth: '200px',
    marginTop: '14px'
  }
}))

const Footer: React.FC = () => {
  const { isDark } = useDarkMode()
  const classes = useStyles()

  return (
    <div>
      <SiteMapWrapper>
        <Grid container justifyContent="space-between" className={classes.row}>
          <Grid item className={classes.logo}>
            <Logo href={HOMEPAGE_LINK} isDark={isDark} />
            <Typography variant="subtitle2" paragraph className={classes.logoTitle}>
              Building the Next Generation Cross-Chain DEX on Solana
            </Typography>
          </Grid>
          <Grid item className={classes.column}>
            <Typography variant="body1" align="center" paragraph className={classes.listTitle}>
              Company
            </Typography>
            <StyledLink
              color="inherit"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              Twitter
            </StyledLink>
            <br />
            <StyledLink
              color="inherit"
              href={DISCORD_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              Discord
            </StyledLink>
            <br />
            <StyledLink
              color="inherit"
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              Telegram
            </StyledLink>
          </Grid>
          <Grid item className={classes.column}>
            <Typography variant="body1" paragraph className={classes.listTitle}>
              Resources
            </Typography>
            <StyledLink
              color="inherit"
              href={GITHUB_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              Github
            </StyledLink>
            <br />
            <StyledLink
              color="inherit"
              href={WHITE_PAPER}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              Whitepaper
            </StyledLink>
          </Grid>
          <Grid item className={classes.column}>
            <Typography variant="body1" paragraph className={classes.listTitle}>
              About
            </Typography>
            <StyledLink
              color="inherit"
              href={BLOG_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              Blog
            </StyledLink>
            <br />
            <StyledLink
              color="inherit"
              href={DISCORD_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              Contact Us
            </StyledLink>
          </Grid>
        </Grid>
      </SiteMapWrapper>
      <CopyrightWrapper>
        <StyledDiv>
          <IconWrapper>
            <SocialLink href={TWITTER_LINK} target="_blank" rel="noreferrer noopener">
              <TwitterIcon isDark={isDark} width="40px" padding="5px" />
            </SocialLink>
          </IconWrapper>
          <IconWrapper>
            <SocialLink href={DISCORD_LINK} target="_blank" rel="noreferrer noopener">
              <DiscordIcon isDark={isDark} width="40px" padding="5px" />
            </SocialLink>
          </IconWrapper>
          <IconWrapper>
            <SocialLink href={GITHUB_LINK} target="_blank" rel="noreferrer noopener">
              <GithubIcon isDark={isDark} width="40px" padding="5px" />
            </SocialLink>
          </IconWrapper>
          <IconWrapper>
            <SocialLink href={GITHUB_LINK} target="_blank" rel="noreferrer noopener">
              <MediumIcon isDark={isDark} width="40px" padding="5px" />
            </SocialLink>
          </IconWrapper>
          <IconWrapper>
            <SocialLink href={TELEGRAM_LINK} target="_blank" rel="noreferrer noopener">
              <TelegramIcon isDark={isDark} width="40px" padding="5px" />
            </SocialLink>
          </IconWrapper>
        </StyledDiv>
        <CopyrightText>© 2021 DeltaFi. All rights reserved</CopyrightText>
      </CopyrightWrapper>
    </div>
  )
}

export default Footer

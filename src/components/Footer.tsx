import React from 'react'
import styled from 'styled-components'
import { Grid, makeStyles, Theme, Typography, Link } from '@material-ui/core'

import { StyledLink } from './LinkList'

import {
  HOMEPAGE_LINK,
  BLOG_LINK,
  TWITTER_LINK,
  GITHUB_LINK,
  DISCORD_LINK,
  TELEGRAM_LINK,
  WHITE_PAPER,
  APP_LINK,
} from 'config/constants/constant'
import useDarkMode from 'hooks/useDarkMode'

const SiteMapWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
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

const CopyrightText = styled.div`
  margin-bottom: 20px;
  order: 3;
`

export const LogoTextLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 35px;
`

const SocialLink = styled(Link)``

const useStyles = makeStyles(({ palette }: Theme) => ({
  row: {
    maxWidth: '1200px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  listTitle: {
    fontSize: '20px',
  },
  listItem: {
    color: palette.text.secondary,
    padding: '0px !important',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  logo: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  logoTitle: {
    maxWidth: '250px',
    marginTop: '30px',
    fontSize: '16px',
    fontWeight: 'normal',
  },
}))

const Footer: React.FC = () => {
  const { isDark } = useDarkMode()
  const classes = useStyles()

  return (
    <div>
      <SiteMapWrapper>
        <Grid container justifyContent="space-between" className={classes.row}>
          <Grid item>
            <LogoTextLink
              color="inherit"
              href={HOMEPAGE_LINK}
              target="_self"
              rel="noreferrer noopener"
              className={classes.logo}
            >
              DeltaFi
            </LogoTextLink>
            <Typography variant="subtitle2" paragraph className={classes.logoTitle}>
              Building the Next Generation Cross-Chain DEX on Solana
            </Typography>
            <CopyrightText style={{ marginTop: 100, fontSize: '17px' }}>Copyright © 2022. DeltaFi</CopyrightText>
          </Grid>
          <br/>
          <Grid item className={classes.column}>
            <Typography variant="body1" align="center" paragraph className={classes.listTitle}>
              Company
            </Typography>
            <br />
            <StyledLink
              color="inherit"
              href={APP_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              Mobile APP
            </StyledLink>
            <br />
            <StyledLink
              color="inherit"
              href={APP_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              DeltaFi DEX
            </StyledLink>
            <br />
            {/* <StyledLink
              color="inherit"
              href={APP_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              Governance
            </StyledLink> */}
          </Grid>
          <Grid item className={classes.column}>
            <Typography variant="body1" paragraph className={classes.listTitle}>
              Resources
            </Typography>
            <br />
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
              Community
            </Typography>
            <br />
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
            <br />
            <StyledLink
              color="inherit"
              href={BLOG_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.listItem}
            >
              Medium
            </StyledLink>
          </Grid>
        </Grid>
      </SiteMapWrapper>
    </div>
  )
}

export default Footer

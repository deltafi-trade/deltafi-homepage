import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

import Logo from './Logo'
import { LaunchButton, ThemeButton } from 'components'
import { StyledLink } from './LinkList'

import {
  HOMEPAGE_LINK,
  BLOG_LINK,
  TWITTER_LINK,
  GITHUB_LINK,
  DISCORD_LINK,
  YOUTUBE_LINK,
  CAREERS_LINK,
  PRIVACY_LINK,
  TELEGRAM_LINK,
  DOC_LINK,
} from 'config/constants/constant'
import { BlogIcon, GithubIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from 'components'
import useDarkMode from 'hooks/useDarkMode'

const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
  order: 2;
  ${({ theme }) => theme.muibreakpoints.up('md')} {
    order: 1;
  }
`
const FlexWrapper = styled(Container)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    flex-direction: column;
  }
`
const SiteMapWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  padding: ${({ theme }) => theme.spacing(3)}px;
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    display: none;
  }
`

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  order: 2;
  margin-bottom: 0;

  .launch-button,
  .theme-button {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    order: 1;
    margin-bottom: 10px;
  }
`
const StyledDivMt = styled(StyledDiv)`
  padding-top: 32px;
`
const CopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 24px 0;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    background-color: ${({ theme }) => theme.palette.background.default};
    flex-direction: column;
  }
`
const IconWrapper = styled.div`
  margin: 0 16px;
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    margin: 0 6px;
  }
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
const Footer: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <div>
      <SiteMapWrapper>
        <FlexWrapper>
          <Wrapper>
            <Logo href={HOMEPAGE_LINK} isDark={isDark} />
            <StyledDivMt>
              <StyledLink
                color="inherit"
                href={TWITTER_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="font-size-14"
              >
                Twitter
              </StyledLink>
              <StyledLink
                color="inherit"
                href={DISCORD_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="font-size-14"
              >
                Discord
              </StyledLink>
              <StyledLink
                color="inherit"
                href={GITHUB_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="font-size-14"
              >
                Github
              </StyledLink>
              <StyledLink
                color="inherit"
                href={BLOG_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="font-size-14"
              >
                Blog
              </StyledLink>
              <StyledLink
                color="inherit"
                href={DOC_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="font-size-14"
              >
                Docs
              </StyledLink>
              <StyledLink color="inherit" href={CAREERS_LINK} className="font-size-14">
                Careers
              </StyledLink>
              <StyledLink color="inherit" href={PRIVACY_LINK} className="font-size-14">
                Privacy Policy
              </StyledLink>
            </StyledDivMt>
          </Wrapper>
          <StyledDiv>
            <ThemeButton toggleDarkMode={toggleDarkMode} isDark={isDark} className="theme-button" />
            <LaunchButton color="primary" className="launch-button" />
          </StyledDiv>
        </FlexWrapper>
      </SiteMapWrapper>
      <CopyrightWrapper>
        <FlexWrapper>
          <Wrapper>© 2021 DeltaFi. All rights reserved</Wrapper>
          <StyledDiv>
            <IconWrapper>
              <StyledLink href={GITHUB_LINK} target="_blank" rel="noreferrer noopener">
                <GithubIcon isDark={isDark} width="40px" />
              </StyledLink>
            </IconWrapper>
            <IconWrapper>
              <StyledLink href={TELEGRAM_LINK} target="_blank" rel="noreferrer noopener">
                <TelegramIcon isDark={isDark} width="40px" />
              </StyledLink>
            </IconWrapper>
            <IconWrapper>
              <StyledLink href={BLOG_LINK} target="_blank" rel="noreferrer noopener">
                <BlogIcon isDark={isDark} width="40px" />
              </StyledLink>
            </IconWrapper>
            <IconWrapper>
              <StyledLink href={TWITTER_LINK} target="_blank" rel="noreferrer noopener">
                <TwitterIcon isDark={isDark} width="40px" />
              </StyledLink>
            </IconWrapper>
            <IconWrapper>
              <StyledLink href={YOUTUBE_LINK} target="_blank" rel="noreferrer noopener">
                <YoutubeIcon isDark={isDark} width="40px" />
              </StyledLink>
            </IconWrapper>
          </StyledDiv>
        </FlexWrapper>
      </CopyrightWrapper>
    </div>
  )
}

export default Footer

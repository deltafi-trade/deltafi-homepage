import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import LaunchApp from './LaunchApp'
import DarkMode from './DarkMode'

import { StyledLink } from './LinkList'

import useTheme from 'hooks/useTheme'
import { HOMEPAGE_LINK, BLOG_LINK, TWITTER_LINK, GITHUB_LINK, DISCORD_LINK, PINTEREST_LINK, YOUTUBE_LINK } from 'config/constants/constant'

import { PinterestIcon, BlogIcon, TwitterIcon, YoutubeIcon } from 'components'

const FlexWrapper = styled.div`
	flex: 1;
  display: flex;
  align-items: center;
	justify-content: space-between;
  flex-direction: column;
	margin: 5px 0;
	padding-left: 14px;
  padding-right: 14px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    padding-left: 14px;
    padding-right: 14px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
		margin: 16px 0;
    padding-left: 24px;
    padding-right: 24px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
		margin: 24px 0;
    padding-left: 76px;
    padding-right: 76px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
		margin: 24px 0;
    padding-left: 200px;
    padding-right: 200px;
  }
`

const Container = styled.div`
	display: none;
	align-items: flex-end;
	justify-content: center;
  background-color: ${({ theme }) => theme.colors.footerMain};
  color: ${({ theme }) => theme.colors.footerText};
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`

const StyledDiv = styled.div`
	display: flex;
	align-items: flex-end;
  order: 1;
  margin-bottom: 10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    order: 2;
    margin-bottom: 0;
  }
`

const StyledDivMt = styled(StyledDiv)`
  padding-top: 32px;
  .social-icon {
    width: 40px;
  }
  .font-size-14 {
    font-size: 14px;
    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: 18px;
    }
  }
`

const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
  order: 2;
  ${({ theme }) => theme.mediaQueries.sm} {
    order: 1;
  }
`

const FooterContaier = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.footerMain};
  color: ${({ theme }) => theme.colors.footerText};
  padding: 24px;
  ${({ theme }) => theme.mediaQueries.xs} {
    background-color: ${({ theme }) => theme.colors.footer};
    flex-direction: row;
    padding: 0;
  }
`
const IconWrapper = styled.div`
  margin: 0 6px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 16px;
  }
`
const Footer: React.FC = () => {
	const { isDark, toggleTheme } = useTheme()
  const textColor = isDark ? '#FFF' : '#000' 
  return (
    <Wrapper>
      <Container>
        <FlexWrapper>
          <Wrapper>
            <Logo href={HOMEPAGE_LINK} isDark={isDark}/>
            <StyledDivMt>
              <StyledLink color={textColor} href={TWITTER_LINK} target="_blank" rel="noreferrer noopener" className="font-size-14">Twitter</StyledLink>
              <StyledLink color={textColor} href={DISCORD_LINK} target="_blank" rel="noreferrer noopener" className="font-size-14">Discord</StyledLink>
              <StyledLink color={textColor} href={GITHUB_LINK} target="_blank" rel="noreferrer noopener" className="font-size-14">Github</StyledLink>
              <StyledLink color={textColor} href={BLOG_LINK} target="_blank" rel="noreferrer noopener" className="font-size-14">Blog</StyledLink>
              <StyledLink color={textColor} href="/career" className="font-size-14">Careers</StyledLink>
              <StyledLink color={textColor} href="/privacy" className="font-size-14">Privacy Policy</StyledLink>
            </StyledDivMt>
          </Wrapper>
          <StyledDiv>
            <DarkMode toggleTheme={toggleTheme} isDark={isDark}/>
            <LaunchApp primary="primary"/>
          </StyledDiv>
        </FlexWrapper>
      </Container>
      <FooterContaier>
        <FlexWrapper>
          <Wrapper>© 2021 DeltaFi. All rights reserved</Wrapper>
          <StyledDiv>
            <IconWrapper>
              <StyledLink href={PINTEREST_LINK} target="_blank" rel="noreferrer noopener"><PinterestIcon isDark={isDark} width="40px"/></StyledLink>
            </IconWrapper>
            <IconWrapper>
              <StyledLink href={BLOG_LINK} target="_blank" rel="noreferrer noopener"><BlogIcon isDark={isDark} width="40px"/></StyledLink>
            </IconWrapper>
            <IconWrapper>
              <StyledLink href={TWITTER_LINK} target="_blank" rel="noreferrer noopener"><TwitterIcon isDark={isDark} width="40px"/></StyledLink>
            </IconWrapper>
            <IconWrapper>
              <StyledLink href={YOUTUBE_LINK} target="_blank" rel="noreferrer noopener"><YoutubeIcon isDark={isDark} width="40px"/></StyledLink>
            </IconWrapper>
          </StyledDiv>
        </FlexWrapper>
      </FooterContaier>
    </Wrapper>
  )
}

export default Footer

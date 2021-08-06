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
	margin: 5px 0;
	padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
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
	display: flex;
	align-items: flex-end;
	justify-content: center;
  background-color: ${({ theme }) => theme.colors.footerMain};
  color: ${({ theme }) => theme.colors.footerText};
`

const StyledDiv = styled.div`
	display: flex;
	align-items: flex-end;
`

const StyledDivMt = styled(StyledDiv)`
  padding-top: 32px;
  .social-icon {
    width: 40px;
  }
`

const Wrapper = styled.div``

const FooterContaier = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.footerText};
`
const IconWrapper = styled.div`
  margin: 0 16px;
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
              <StyledLink color={textColor} href={TWITTER_LINK} target="_blank" rel="noreferrer noopener">Twitter</StyledLink>
              <StyledLink color={textColor} href={DISCORD_LINK} target="_blank" rel="noreferrer noopener">Discord</StyledLink>
              <StyledLink color={textColor} href={GITHUB_LINK} target="_blank" rel="noreferrer noopener">Github</StyledLink>
              <StyledLink color={textColor} href={BLOG_LINK} target="_blank" rel="noreferrer noopener">Blog</StyledLink>
              <StyledLink color={textColor} href="/career">Careers</StyledLink>
              <StyledLink color={textColor} href="/privacy">Privacy Policy</StyledLink>
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

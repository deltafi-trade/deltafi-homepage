import React from 'react'
import styled from 'styled-components'
import { Link, Typography } from '@material-ui/core'
import { BLOG_LINK, TWITTER_LINK, GITHUB_LINK, DISCORD_LINK, DOC_LINK, TEAM_LINK } from 'config/constants/constant'

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  padding: 0 10px;
`

const StyledDiv = styled(Typography)`
  display: flex;
  a {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
    display: flex;
    align-items: center;
  }
  ${({ theme }) => theme.muibreakpoints.down('md')} {
    display: none;
  }
`;

const CustomLink = styled(Link)`
  margin-right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LinkList: React.FC = () => {
  return (
    <StyledDiv>
      <CustomLink color="inherit" underline="none" href={BLOG_LINK} target="_blank" rel="noreferrer noopener">
        Blog
      </CustomLink>
      <CustomLink color="inherit" underline="none" href={TWITTER_LINK} target="_blank" rel="noreferrer noopener">
        Community
      </CustomLink>
      <CustomLink color="inherit" underline="none">
        Community&nbsp;
        <img src="/images/homepage/arrow-down.svg" alt="arrow-down" />
      </CustomLink>
      <CustomLink color="inherit" underline="none">
        Resources&nbsp;
        <img src="/images/homepage/arrow-down.svg" alt="arrow-down" />
      </CustomLink>
      <CustomLink color="inherit" underline="none" href={GITHUB_LINK} target="_blank" rel="noreferrer noopener">
        Whitepaper
      </CustomLink>
      <CustomLink color="inherit" underline="none" href={TEAM_LINK} rel="noreferrer noopener">
        About
      </CustomLink>
    </StyledDiv>
  )
}

export default LinkList

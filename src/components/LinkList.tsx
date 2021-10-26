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
`

const LinkList: React.FC = () => {
  return (
    <StyledDiv>
      <Link color="inherit" underline="none" href={BLOG_LINK} target="_blank" rel="noreferrer noopener">
        Blog
      </Link>
      <Link color="inherit" underline="none" href={TWITTER_LINK} target="_blank" rel="noreferrer noopener">
        Twitter
      </Link>
      <Link color="inherit" underline="none" href={DISCORD_LINK} target="_blank" rel="noreferrer noopener">
        Discord
      </Link>
      <Link color="inherit" underline="none" href={GITHUB_LINK} target="_blank" rel="noreferrer noopener">
        Github
      </Link>
      <Link color="inherit" underline="none" href={TEAM_LINK} rel="noreferrer noopener">
        Team
      </Link>
      <Link color="inherit" underline="none" href={DOC_LINK} target="_blank" rel="noreferrer noopener">
        Docs
      </Link>
    </StyledDiv>
  )
}

export default LinkList

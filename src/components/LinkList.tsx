import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link, makeStyles, Theme, Typography } from '@material-ui/core'
import { BLOG_LINK, TWITTER_LINK, GITHUB_LINK, TEAM_LINK, DISCORD_LINK, TELEGRAM_LINK, WHITE_PAPER, TOKENOMICS_LINK } from 'config/constants/constant'
import useOutsideClick from 'hooks/useOutsideClick'

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
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

const CustomLink = styled(Link)`
  margin-right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const DropDownLink = styled(Link)`
  padding: 8px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 16px;
`

const Divider = styled.div`
  background: ${({ theme }) => theme.palette.gradient.cta};
  height: 1px;
  opacity: 0.16;
  margin: 0 6px;
`

const useStyles = makeStyles((theme: Theme) => ({
  dropDownContainer: {
    marginRight: '20px',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dropDown: {
    position: 'absolute',
    top: '40px',
    backgroundColor: theme.palette.background.secondary,
    padding: '10px',
    borderRadius: '7px',
  }
}))

const LinkList: React.FC = () => {
  const [communityShow, setCommunityShow] = useState<boolean>(false);
  const [resourcesShow, setResourcesShow] = useState<boolean>(false);
  const [blogShow, setBlogShow] = useState<boolean>(false)
  const classes = useStyles();
  const communityContainerRef = useRef<HTMLDivElement>(null);
  const resourcesContainerRef = useRef<HTMLDivElement>(null);
  const blogContainerRef = useRef<HTMLDivElement>(null)

  useOutsideClick(
    communityContainerRef,
    useCallback(() => setCommunityShow(false), []),
  );

  useOutsideClick(
    resourcesContainerRef,
    useCallback(() => setResourcesShow(false), []),
  );

  useOutsideClick(
    blogContainerRef,
    useCallback(() => setBlogShow(false), []),
  )

  return (
    <StyledDiv>
      <div ref={blogContainerRef} onClick={() => setBlogShow(!blogShow)} className={classes.dropDownContainer}>
        <Typography color="inherit" variant="subtitle1" className="subtitle">
          Blog&nbsp;&nbsp;
          <img src="/images/homepage/arrow-down.svg" alt="arrow-down" />
        </Typography>
        {blogShow ? (
          <div className={classes.dropDown}>
            <DropDownLink color="inherit" underline="none" href={BLOG_LINK} target="_blank" rel="noreferrer noopener">
              Medium
            </DropDownLink>
            <Divider />
            <DropDownLink color="inherit" underline="none" href={TOKENOMICS_LINK}>
              News
            </DropDownLink>
          </div>
        ) : null}
      </div>

      <div ref={communityContainerRef} onClick={() => setCommunityShow(!communityShow)} className={classes.dropDownContainer}>
        <Typography color="inherit" variant="subtitle1" className="subtitle">
          Community&nbsp;&nbsp;
          <img src="/images/homepage/arrow-down.svg" alt="arrow-down" />
        </Typography>
        {communityShow ? (
          <div className={classes.dropDown}>
            <DropDownLink color="inherit" underline="none" href={TWITTER_LINK} target="_blank" rel="noreferrer noopener">
              Twitter
            </DropDownLink>
            <Divider />
            <DropDownLink color="inherit" underline="none" href={DISCORD_LINK} target="_blank" rel="noreferrer noopener">
              Discord
            </DropDownLink>
            <Divider />
            <DropDownLink color="inherit" underline="none" href={TELEGRAM_LINK} target="_blank" rel="noreferrer noopener">
              Telegram
            </DropDownLink>
          </div>
        ): null}
      </div>

      <div ref={resourcesContainerRef} onClick={() => setResourcesShow(!resourcesShow)} className={classes.dropDownContainer}>
        <Typography color="inherit" variant="subtitle1" className="subtitle">
          Resources&nbsp;&nbsp;
          <img src="/images/homepage/arrow-down.svg" alt="arrow-down" />
        </Typography>
        {resourcesShow ? (
           <div className={classes.dropDown}>
            <DropDownLink color="inherit" underline="none" href={GITHUB_LINK} target="_blank" rel="noreferrer noopener">
              Github
            </DropDownLink>
            <Divider />
            <DropDownLink color="inherit" underline="none" href={WHITE_PAPER} target="_blank" rel="noreferrer noopener">
              Docs
            </DropDownLink>
          </div>
        ): null}
      </div>
      <CustomLink color="inherit" underline="none" href={WHITE_PAPER} target="_blank" rel="noreferrer noopener">
        Whitepaper
      </CustomLink>
      <CustomLink color="inherit" underline="none" href={TEAM_LINK}>
        About
      </CustomLink>
    </StyledDiv>
  )
}

export default LinkList

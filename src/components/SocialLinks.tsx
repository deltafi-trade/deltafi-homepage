import { Box, Link, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  TWITTER_LINK,
  DISCORD_LINK,
  TELEGRAM_LINK,
  BLOG_LINK,
  GITHUB_LINK,
  YOUTUBE_LINK,
} from "config/constants/constant";
import useDarkMode from "hooks/useDarkMode";
import { TelegramIcon, DiscordIcon, TwitterIcon, MediumIcon, GithubIcon } from "components";
import styled from "styled-components";
import { YoutubeIcon } from "./Svg";
import Spotify from "./Svg/icons/Spotify";

const useStyles = makeStyles((theme: Theme) => ({
  socialLinks: {
    maxWidth: 360,
    justifyContent: "space-between",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      justifyContent: "center",
    },
  },
}));
const IconWrapper = styled.div`
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    height: 36px;
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
`;

const SocialLinks: React.FC = () => {
  const { isDark } = useDarkMode();
  const classes = useStyles();
  return (
    <Box display="flex" className={classes.socialLinks}>
      <IconWrapper>
        <Link href={TWITTER_LINK} target="_blank" rel="noreferrer noopener">
          <TwitterIcon isDark={isDark} width="36px" />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href={DISCORD_LINK} target="_blank" rel="noreferrer noopener">
          <DiscordIcon isDark={isDark} width="36px" />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href={TELEGRAM_LINK} target="_blank" rel="noreferrer noopener">
          <TelegramIcon isDark={isDark} width="36px" />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href={BLOG_LINK} target="_blank" rel="noreferrer noopener">
          <MediumIcon isDark={isDark} width="36px" />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href={GITHUB_LINK} target="_blank" rel="noreferrer noopener">
          <GithubIcon isDark={isDark} width="36px" />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href={"TODO_ADD_SPOTIFY_LINK"} target="_blank" rel="noreferrer noopener">
          <Spotify />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href={YOUTUBE_LINK} target="_blank" rel="noreferrer noopener">
          <YoutubeIcon />
        </Link>
      </IconWrapper>
    </Box>
  );
};

export default SocialLinks;

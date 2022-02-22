import { useState } from "react";
import styled from "styled-components";
import { IconButton, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";

import { StyledLink } from "components/LinkList";
import { Logo } from "components";
import {
  HOMEPAGE_LINK,
  BLOG_LINK,
  TWITTER_LINK,
  GITHUB_LINK,
  DISCORD_LINK,
  APP_LINK,
  TELEGRAM_LINK,
  WHITE_PAPER,
} from "config/constants/constant";
import useDarkMode from "hooks/useDarkMode";

interface MenuProps {
  readonly open: boolean
}
interface ExpandProps {
  my: string
}

const StyledMenu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.palette.background.default};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  width: '100%';
  ${({ theme }) => theme.muibreakpoints.up("sm")} {
    width: 320px;
  }
`;
const BlurBackground = styled.div`
  position: absolute;
  width: 100vw;
  backdrop-filter: blur(10px);
  height: 100vh;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.shadows[1]};
  z-index: 10;
`;
const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)}px;

  button {
    padding: 0;
  }
`;

const ExpandMenu = styled.div<ExpandProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)}px;
  width: 100%;
  background: ${({ theme }) => theme.palette.background.primary};
  margin: ${({ my }) => `${my} 0px`};
  cursor: pointer;
  .expand-title {
    font-size: 14px;
    text-transform: uppercase;
    padding: 0;
    ${({ theme }) => theme.muibreakpoints.up("md")} {
      font-weight: 500;
    }
  }
`;
const SubMenu = styled.div`
  width: calc(100% - 44px);
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.background.default};
  .sub-menu {
    font-size: 14px;
    padding: 9px 0;
    font-size: 14px;
    ${({ theme }) => theme.muibreakpoints.up("md")} {
      font-weight: 400;
    }
  }
`;

function Menu({ open, setOpen, ...props }) {
  const isHidden = !!open;
  const { isDark } = useDarkMode();
  const [community, setCommunity] = useState(false);
  const [resources, setResources] = useState(false);

  return (
    <>
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <MenuHeader className="one-line">
          <Logo href={HOMEPAGE_LINK} isDark={isDark} />
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </MenuHeader>
        <ExpandMenu className="one-line" my="0px">
          <StyledLink
            color="inherit"
            href={APP_LINK}
            target="_blank"
            rel="noreferrer noopener"
            className="expand-title"
          >
            REQUEST A DEMO
          </StyledLink>
          <ArrowRightAltIcon />
        </ExpandMenu>
        <ExpandMenu className="one-line" my="0px">
          <StyledLink
            color="inherit"
            href={BLOG_LINK}
            target="_blank"
            rel="noreferrer noopener"
            className="expand-title"
          >
            BLOG
          </StyledLink>
          <ArrowRightAltIcon />
        </ExpandMenu>
        <ExpandMenu className="one-line" my="2px" onClick={() => setCommunity(!community)}>
          <Typography variant="subtitle2">COMMUNITY</Typography>
          {community ? <RemoveIcon /> : <AddIcon />}
        </ExpandMenu>
        {community && (
          <SubMenu>
            <StyledLink
              color="inherit"
              href={GITHUB_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="sub-menu"
            >
              Github
            </StyledLink>
            <StyledLink
              color="inherit"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="sub-menu"
            >
              Twitter
            </StyledLink>
            <StyledLink
              color="inherit"
              href={DISCORD_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="sub-menu"
            >
              Discord
            </StyledLink>
            <StyledLink
              color="inherit"
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="sub-menu"
            >
              Telegram
            </StyledLink>
          </SubMenu>
        )}
        <ExpandMenu className="one-line" my="2px" onClick={() => setResources(!resources)}>
          <Typography variant="subtitle2">RESOUCES</Typography>
          {resources ? <RemoveIcon /> : <AddIcon />}
        </ExpandMenu>
        {resources && (
          <SubMenu>
            <StyledLink
              color="inherit"
              href={GITHUB_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="sub-menu"
            >
              Github
            </StyledLink>
          </SubMenu>
        )}
        <ExpandMenu className="one-line" my="0px">
          <StyledLink
            color="inherit"
            href={WHITE_PAPER}
            target="_blank"
            rel="noreferrer noopener"
            className="expand-title"
          >
            WHITEPAPER
          </StyledLink>
          <ArrowRightAltIcon />
        </ExpandMenu>
      </StyledMenu>
      {open && <BlurBackground onClick={() => setOpen(false)} />}
    </>
  );
}

export default Menu;

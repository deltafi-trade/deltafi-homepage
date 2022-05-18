import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Theme, IconButton, Hidden, Drawer, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import MenuIcon from "@mui/icons-material/Menu";

import { APP_LINK, HOMEPAGE_LINK, menuItems } from "config/constants/constant";
import { Button } from "components";
import useDarkMode from "hooks/useDarkMode";
import Logo from "./Logo";
import LinkList from "./LinkList";
import List from "./List";

const HeaderWrapper = styled(AppBar)`
  background: none;
  padding: 0 24px;
  box-shadow: none;
  .theme-button {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
  &.isShrunk {
    background-color: rgba(49, 49, 49, 0.6);
  }
  ${({ theme }) => theme.muibreakpoints.up("lg")} {
    padding: 0 1.875%;
  }
`;

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "70px",
    [theme.breakpoints.down("md")]: {
      minHeight: "60px",
    },
  },
  drawerPaper: {
    width: "100%",
    backgroundColor: theme.palette.background.primary,
  },
  menu: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

const Header: React.FC = () => {
  const { isDark } = useDarkMode();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((shrunk) => {
        if (!shrunk && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
          return true;
        }

        if (shrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
          return false;
        }

        return shrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <HeaderWrapper position="fixed" color="inherit" className={`${isShrunk && "isShrunk"}`}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Logo href={HOMEPAGE_LINK} isDark={isDark} />
        <LinkList />
        <Hidden mdDown implementation="css">
          <Button color="primary" href={APP_LINK}>
            <Box fontSize={14} lineHeight="16px">
              Launch APP
            </Box>
          </Button>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Box height="100%" display="flex" flex={1} flexDirection="column">
            <Box flex={1}>
              <Box display="flex">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  size="large"
                  sx={{ marginLeft: "auto", marginRight: 4, marginTop: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <List items={menuItems} className={classes.menu} />
              <Box display="flex" justifyContent="center">
                <Button color="primary" href={APP_LINK}>
                  Launch APP
                </Button>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Hidden>
    </HeaderWrapper>
  );
};

export default Header;

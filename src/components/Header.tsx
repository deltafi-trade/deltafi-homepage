import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AppBar, Container, Toolbar, Theme, IconButton, Hidden, Drawer, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import MenuIcon from "@mui/icons-material/Menu";

import { APP_LINK, HOMEPAGE_LINK, menuItems } from "config/constants/constant";
import { Button } from "components";
import useDarkMode from "hooks/useDarkMode";
import Logo from "./Logo";
import LinkList from "./LinkList";
import List from "./List";

interface ContainerProps {
  theme: any
  isshrunk: boolean
}

const HeaderWrapper = styled(AppBar)<ContainerProps>`
  background-color: ${({ theme, isshrunk }) => (isshrunk ? theme.palette.background.primary : "none")};
  box-shadow: none;
  .theme-button {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
`;

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "90px",
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
  const [isshrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setShrunk((_isShrunk) => {
        if (!_isShrunk && (document.body.scrollTop > 98 || document.documentElement.scrollTop > 98)) {
          return true;
        }

        if (_isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
          return false;
        }

        return _isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <HeaderWrapper position="fixed" color="inherit" isshrunk={isshrunk}>
      <Container>
        <Toolbar disableGutters className={classes.toolbar}>
          <Logo href={HOMEPAGE_LINK} isDark={isDark} />
          <LinkList />
          <Hidden mdDown implementation="css">
            <Button color="primary" href={APP_LINK}>
              Launch APP
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              size="large">
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
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
            <div className={classes.toolbar} />
            <Box flex={1}>
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

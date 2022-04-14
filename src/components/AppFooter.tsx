import React from "react";
import { Container, Box, Theme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";
import SocialLinks from "./SocialLinks";
import { Button } from "./Button";
import { APP_LINK, HOMEPAGE_LINK } from "config/constants/constant";
import styled from "styled-components";
import Page from "./layout/Page";

const useStyles = makeStyles(({ breakpoints, palette, spacing }: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    [breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      padding: 0,
    },
    "&>div": {
      paddingTop: spacing(3),
      paddingBottom: spacing(1.5)
    }
  },
  socailCt: {
    margin: "auto auto auto 7rem",
    width: "280px",
    [breakpoints.down("md")]: {
      margin: "auto",
      width: "100%"
    }
  },
  solana: {
    [breakpoints.down("md")]: {
      marginLeft: "2rem",
    },
    marginRight: "2rem",
    fontWeight: 600
  },
  logo: {
    color: palette.text.primary,
    fontWeight: 400,
    width: 180,
    [breakpoints.down("md")]: {
      width: 140,
    },
    [breakpoints.down("sm")]: {
      width: 100,
    },
  },
}));

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Footer: React.FC = (props) => {
  const classes = useStyles(props);

  return (
    <Page>
      <Container>
      <Box sx={{ paddingTop: "36px", paddingBottom: "32px" }}>
        <Box className={classes.container}>
          <Box>
            <StyledLink to={HOMEPAGE_LINK} aria-label="DeltaFi App">
              <img src="/images/deltafi-logo.svg" alt="" className={classes.logo} />
            </StyledLink></Box>
          <Box className={classes.socailCt}>
            <SocialLinks />
          </Box>
          <Box><Button color="primary" href={APP_LINK}>
            Launch APP
          </Button></Box>
        </Box>
        <Box className={classes.container}>
          <Box className={classes.solana}>
            Building the Next Generation Cross-Chain DEX on Solana
          </Box>
          <Box>
            <Typography variant="body2">Copyright © 2022. DeltaFi</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
    </Page>
    
  );
};

export default Footer;

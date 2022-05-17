import React from "react";
import { Container, Box, Theme, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import SocialLinks from "./SocialLinks";
import { Button } from "./Button";
import { SUBMITBUG_LINK } from "config/constants/constant";
import Page from "./layout/Page";

const useStyles = makeStyles(({ breakpoints, palette, spacing }: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    [breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
    },
  },
  socailCt: {
    width: "280px",
    [breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
    },
  },
  solana: {
    [breakpoints.down("md")]: {
      marginLeft: "2rem",
    },
    marginRight: "2rem",
    fontWeight: 600,
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

const Footer: React.FC = (props) => {
  const classes = useStyles(props);

  return (
    <Page>
      <Container>
          <Box className={classes.container}>
            <Box mt={4} className={classes.socailCt}>
              <SocialLinks />
            </Box>
            <Box mt={4}>
              <Button color="primary" href={SUBMITBUG_LINK}>
                Submit a Bug
              </Button>
            </Box>
          </Box>
          <Box pb={4} className={classes.container}>
            <Box mt={4} className={classes.solana}>Building the Next Generation Cross-Chain DEX on Solana</Box>
            <Box mt={4}>
              <Typography variant="body2">Copyright © 2022. DeltaFi</Typography>
            </Box>
          </Box>
      </Container>
    </Page>
  );
};

export default Footer;

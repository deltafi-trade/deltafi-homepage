import React from "react";
import { Box, Theme, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import SocialLinks from "./SocialLinks";
import { Button } from "./Button";
import { SUBMITBUG_LINK } from "config/constants/constant";
import Page from "./layout/Page";

const useStyles = makeStyles(({ breakpoints, palette }: Theme) => ({
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
    fontWeight: 400,
    fontSize: 14,
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
      <Box
        sx={{ paddingTop: 3 }}
        paddingLeft={{ xs: "24px", lg: "1.875%" }}
        paddingRight={{ xs: "24px", lg: "1.875%" }}
      >
        <Box className={classes.container}>
          <Box className={classes.socailCt}>
            <SocialLinks />
          </Box>
          <Box mt={{ xs: 2.5, md: 0 }}>
            <Button color="primary" href={SUBMITBUG_LINK}>
              <Box lineHeight="24px">Submit a Bug</Box>
            </Button>
          </Box>
        </Box>
        <Box pb={3} mt={{ xs: 2.5, md: 0.5 }} className={classes.container}>
          <Box className={classes.solana}>Building the Next Generation Cross-Chain Decentralized Exchange</Box>
          <Box mt={{ xs: 2.5, md: 0 }}>
            <Typography variant="body2">Copyright © 2022. DeltaFi</Typography>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default Footer;

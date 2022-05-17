import React from "react";
import { Box, Theme } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ palette, spacing, transitions }: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  "@keyframes logoEffect": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  logo: {
    transform: "translate3d(0, 0, 0)",
    animation: "$logoEffect 2s linear infinite'",
  },
}));

const PageLoader: React.FC = (props) => {
  const classes = useStyles(props);
  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img src="/images/logomark 200.svg" alt="" width={128} height={128} className={classes.logo} />
      </Box>
    </Box>
  );
};

export default PageLoader;

import React, { SVGProps } from "react";
import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { DeltaIcon as SVGLogo } from "./Svg";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.gradient.logo,
  },
}));

interface Props extends SVGProps<HTMLOrSVGElement> {}

function LogoIcon(props: Props) {
  const classes = useStyles();
  return (
    <Box
      width={props.width}
      height={props.height}
      borderRadius="50%"
      className={classes.container}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <SVGLogo {...props} width="50%" height="50%" />
    </Box>
  );
}

LogoIcon.defaultProps = {
  width: 40,
};
export default LogoIcon;

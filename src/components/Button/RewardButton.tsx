import React from "react";
import { Button as MUIButton, ButtonProps, Theme, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ breakpoints }: Theme) => ({
  ctaButton: {
    color: "#D4FF00",
    borderRadius: 100,
    border: "solid 2px #D4FF00",
    backgroundOrigin: "border-box",
    height: 48,
    width: 200,
    fontSize: 18,
    fontWeight: 600,
    textTransform: "none",

    "&:hover": {
      color: "#313131",
      boxShadow: "none",
      background: "transparent",
      backgroundColor: "#D4FF00",
    },

    [breakpoints.down("sm")]: {
      height: 45,
      width: 140,
      fontSize: 12,
    },
  },
}));

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
  href?: string;
}

const RewardButton: React.FC<IButtonProps> = (props) => {
  const { children, href } = props;
  const classes = useStyles(props);

  return (
    <MUIButton className={classes.ctaButton} size="large" href={href}>
      <Box>{children}</Box>
    </MUIButton>
  );
};

export default React.memo(RewardButton);

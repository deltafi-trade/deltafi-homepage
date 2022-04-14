import React from "react";
import { Button as MUIButton, ButtonProps, Theme, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
  ctaButton: {
    backgroundColor: "#D4FF00",
    color: "#313131",
    borderRadius: 100,
    border: "solid 1px transparent",
    backgroundOrigin: "border-box",
    height: 48,
    width: 200,
    fontSize: 18,
    fontWeight: 600,
    textTransform: "none",
    boxShadow: "0px 6px 12px rgba(118, 80, 245, 0.3)",

    "&:hover": {
      color: palette.text.primary,
      boxShadow: "none",
    },

    [breakpoints.down("sm")]: {
      height: 45,
      width: 160,
      fontSize: 15,
    },
  },
}));

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, href } = props;
  const classes = useStyles(props);

  return (
    <MUIButton variant="contained" className={classes.ctaButton} size="large" href={href}>
      <Typography  variant="button">{children}</Typography>
    </MUIButton>
  );
};

export default React.memo(Button);

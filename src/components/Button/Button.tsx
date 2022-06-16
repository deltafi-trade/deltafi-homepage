import React from "react";
import { Button as MUIButton, ButtonProps, Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
  ctaButton: {
    backgroundColor: "linear-gradient(111.31deg, rgba(212, 255, 0) 15.34%, rgba(189, 255, 0) 95.74%)",
    color: "#313131",
    borderRadius: 100,
    border: "solid 1px transparent",
    backgroundOrigin: "border-box",
    width: 200,
    fontSize: 16,
    fontWeight: 600,
    textTransform: "none",
    paddingTop: 10,
    paddingBottom: 10,

    "&:hover": {
      boxShadow: "none",
      backgroundColor: "linear-gradient(111.31deg, rgba(212, 255, 0, 0.4) 15.34%, rgba(189, 255, 0, 0.4) 95.74%)",
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

const Button: React.FC<IButtonProps> = (props) => {
  const { children, onClick } = props;
  const classes = useStyles(props);

  return (
    <MUIButton variant="contained" className={classes.ctaButton} size="large" onClick={onClick}>
      {children}
    </MUIButton>
  );
};

export default React.memo(Button);

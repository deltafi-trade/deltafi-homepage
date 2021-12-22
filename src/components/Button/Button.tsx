import React from 'react';
import { Button as MUIButton, ButtonProps, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }: Theme) => ({
  ctaButton: {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), ${palette.gradient.cta}`,
    color: palette.text.secondary,
    borderRadius: 100,
    border: 'solid 1px transparent',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    boxShadow: `2px 1000px 1px ${palette.background.primary} inset`,

    '&:hover': {
      color: palette.text.primary,
      boxShadow: 'none',
    }
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
      {children}
    </MUIButton>
  );
}

export default React.memo(Button)

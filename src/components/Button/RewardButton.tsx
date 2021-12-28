import React from 'react';
import { Button as MUIButton, ButtonProps, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }: Theme) => ({
  ctaButton: {
    backgroundImage: `linear-gradient(219.47deg, rgba(229, 124, 255, 0.81) -26.6%, #4558FF 78.67%), ${palette.gradient.cta}`,
    color: palette.text.secondary,
    borderRadius: 100,
    border: 'solid 1px transparent',
    backgroundOrigin: 'border-box',
    height: 70,
    width: 270,
    fontSize: 18,
    fontWeight: 'bold',

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

const RewardButton: React.FC<IButtonProps> = (props) => {
  const { children, href } = props;
  const classes = useStyles(props);

  return (
    <MUIButton variant="contained" className={classes.ctaButton} size="large" href={href}>
      {children}
    </MUIButton>
  );
}

export default React.memo(RewardButton)

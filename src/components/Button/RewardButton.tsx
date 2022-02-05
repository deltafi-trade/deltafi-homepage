import React from 'react';
import { Button as MUIButton, ButtonProps, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
  ctaButton: {
    backgroundImage: `linear-gradient(52.7deg, #1AFA9A -3.73%, #478EF0 48.34%, #9945FD 93.4%), ${palette.gradient.cta}`,
    color: palette.text.primary,
    borderRadius: 100,
    border: 'solid 1px transparent',
    backgroundOrigin: 'border-box',
    height: 55,
    width: 200,
    fontSize: 17,
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: `2px 1000px 1px ${palette.background.primary} inset`,

    '&:hover': {
      color: palette.text.primary,
      boxShadow: 'none',
    },

    [breakpoints.down('sm')]: {
      height: 45,
      width: 150,
      fontSize: 14,
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

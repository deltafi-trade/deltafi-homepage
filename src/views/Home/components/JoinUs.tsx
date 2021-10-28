import { makeStyles, Theme, Typography } from '@material-ui/core';

import { Button } from 'components';

const useStyles = makeStyles(({ palette }: Theme) => ({
  joinUs: {
    backgroundColor: palette.background.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '138px',
    paddingBottom: '112px'
  },
}));

const JoinUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.joinUs}>
      <Typography variant="h2" paragraph className="deposit-text">
        Ready to join us?
      </Typography>
      <Button>Join Us</Button>
    </div>
  );
}

export default JoinUs

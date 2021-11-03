import { makeStyles, Theme, Typography } from '@material-ui/core'

import { Button } from 'components'
import { TWITTER_LINK } from 'config/constants/constant'

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
  joinUsContainer: {
    paddingTop: '89px',
    paddingBottom: '82px',

    [breakpoints.down('md')]: {
      padding: '28px',
    },
  },
  joinUs: {
    margin: 'auto',
    backgroundColor: palette.background.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '56px',
    maxWidth: '845px',
    borderRadius: '22px',

    [breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    maxWidth: '486px',
    marginRight: '50px',
    minHeight: '210px',

    [breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginRight: '0',
    },
  },
  button: {},
}))

const JoinUs = () => {
  const classes = useStyles()

  return (
    <div className={classes.joinUsContainer}>
      <div className={classes.joinUs}>
        <div className={classes.text}>
          <Typography variant="h2" paragraph className="deposit-text">
            Join Us
          </Typography>
          <Typography variant="h6" paragraph className="deposit-text">
            Our mission is to increase economic freedom in the world. Join us and make an impact at a global scale.
          </Typography>
        </div>
        <Button className={classes.button} href={TWITTER_LINK}>
          Join Us
        </Button>
      </div>
    </div>
  )
}

export default JoinUs

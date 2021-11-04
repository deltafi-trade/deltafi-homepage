import { Box, Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import { Button } from 'components'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    maxWidth: 800,
  },
  title: {
    fontWeight: 'bold',
    [theme.breakpoints.down("sm")]: {
      fontSize: '2.5rem'
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: '3.25rem'
    },
    [theme.breakpoints.up("md")]: {
      fontSize: '4rem'
    },
  }
}))

const TeamPageTop: React.FC = (props) => {
  const classes = useStyles(props)

  return (
    <Container className={classes.root}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item sm={12} md={12}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography color="primary" variant="h6" paragraph>
              OUR VISION
            </Typography>
            <Typography variant="h1" align="center" paragraph className={classes.title}>
              Creating a pathway to a new financial system
            </Typography>
            <Button color="secondary">Learn more</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TeamPageTop

import styled from 'styled-components'

import { Box, Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import { Button } from 'components'

const DesktopWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    display: none;
  }
`

const useStyles = makeStyles(({ palette }: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    maxWidth: 748,
  },
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
            <Typography variant="h2" align="center" paragraph>
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

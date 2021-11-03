import styled from 'styled-components'

import { Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import { Button } from 'components'

const StyledDiv = styled(Container)`
  display: flex;
  align-items: center;
  min-height: 100vh;
  max-width: 652px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .asset-title {
    font-weight: bold;
  }

  img {
    max-width: 100%;

    ${({ theme }) => theme.muibreakpoints.down('md')} {
      max-height: 328px;
    }
    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      max-height: none;
    }
  }
`
const DesktopWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    display: none;
  }
`

const useStyles = makeStyles(({ palette }: Theme) => ({
  title: {
    fontSize: '78px',
    lineHeight: '80px',
  },
  subTitle: {
    maxWidth: '526px',
  },
}))

const TeamPageTop = () => {
  const classes = useStyles()

  return (
    <div>
      <StyledDiv>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item sm={12} md={12}>
            <Wrapper>
              <Typography color="primary" variant="h6" paragraph>
                OUR VISION
              </Typography>
              <br />
              <Typography variant="h2" align="center" className={classes.title}>
                Creating a pathway to a new financial system
              </Typography>
              <DesktopWrapper>
                <Button color="secondary">Learn more</Button>
              </DesktopWrapper>
            </Wrapper>
          </Grid>
        </Grid>
      </StyledDiv>
    </div>
  )
}

export default TeamPageTop

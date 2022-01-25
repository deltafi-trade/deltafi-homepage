import React from 'react'
import Page from 'components/layout/Page'
import { Box, Container, Grid, makeStyles, Theme, Typography, Link } from '@material-ui/core'

import { HOMEPAGE_LINK } from 'config/constants/constant'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '265vh',
    maxWidth: 1000,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 40,
  },
  secondary: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 40,
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
  },
  link: {
    color: 'green',
  },
}))

const Tokenomics: React.FC = (props) => {
  const classes = useStyles(props)

  return (
    <Page>
      <Container className={classes.root}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item sm={12} md={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h1" align="center" paragraph className={classes.title}>
                DeltaFi (DELFI) Utility Token
              </Typography>
              <Typography variant="h6" align="left" paragraph className={classes.text}>
                DELFI is the utility token of the DeltaFi network. The primary deployment of the DeltaFi network will be
                on Solana.
                <br />
                <br />
                As a decentralized financial market. DeltaFi requires the DELFI token to function. This token is central
                to the design of DeltaFi and cannot be removed without sacrificing essential functionality.
                <br />
                <br />
                The uses of the DELFI token include but not limited to:
                <ul style={{ margin: 0, marginLeft: 25, padding: 0, alignItems: 'left' }}>
                  <li>Supporting the gas metering of smart contract execution</li>
                  <li>
                    Incentivizing network participants and powering the mechanics around pricing and liquidity farming
                    and so on
                  </li>
                  <li>
                    Facilitating the on-chain governance mechanism including proposing referenda, electing council
                    members, voting, etc.
                  </li>
                  <li>Supporting the gas metering of smart contract execution</li>
                </ul>
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" marginTop={5}>
              <Typography variant="h1" align="center" paragraph className={classes.secondary}>
                Genesis Token Allocation
              </Typography>
              <img src="images/token_distribution.svg" />
              <Typography variant="h6" align="left" className={classes.text}>
                <strong>Total Supply: </strong>1 billion tokens will be minted on Solana network.
                <br />
                <strong>Inflation: </strong>There will be inflation. The total supply has a hard cap of 1 billion in
                total.
                <br />
                <strong>Initial Circulating Supply: </strong>1% for public sale to reward the initial community.
                <br />
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" marginTop={5}>
              <Typography variant="h1" align="center" paragraph className={classes.secondary}>
                Allocation Details
              </Typography>
              <img src="images/token_allocation.svg" />
              <Typography variant="h6" align="left" className={classes.text}>
                <strong>Note: </strong>The above numbers are rounded to the closest percentage.
                <br />
                <br />
                For more information about DeltaFi, please refer to the
                <Link underline="none" href={HOMEPAGE_LINK} aria-label="DeltaFi home page">
                  <Typography display={'inline'} variant="h6" className={classes.link}>
                    {' '}
                    homepage
                  </Typography>
                </Link>
                .
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default Tokenomics

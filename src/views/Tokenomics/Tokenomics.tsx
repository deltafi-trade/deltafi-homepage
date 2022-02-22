import React from "react";
import styled from "styled-components";
import {
  Box, Container, Grid, makeStyles, Theme, useTheme, Typography, useMediaQuery,
} from "@material-ui/core";

import { HOMEPAGE_LINK } from "config/constants/constant";
import { RewardButton } from "components";

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.palette.background.primary};
  background-image: url(/images/homepage/banner.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  ${({ theme }) => theme.muibreakpoints.down("sm")} {
    background-size: 700px;
  }
`;

const Card = styled(Grid)`
  height: 230px;
  box-shadow: 2px 1000px 1px ${({ theme }) => theme.palette.background.primary} inset;
  border-radius: 10px;
  background-image: linear-gradient(52.7deg, #1afa9a -3.73%, #478ef0 48.34%, #9945fd 93.4%);
  border: 1px solid transparent;
  background-origin: border-box;
  ${({ theme }) => theme.muibreakpoints.down("sm")} {
    height: 250px;
  }

  .card-header {
    font-weight: normal;
    color: lightgreen;
    line-height: 0;
    padding-top: 15px;
  }

  .card-title {
    font-weight: bold;
  }

  .card-content {
    font-weight: normal;
    font-size: 17px;
  }
`;

const useStyles = makeStyles(({ palette, breakpoints, spacing }: Theme) => ({
  top: {
    display: "flex",
    alignItems: "center",
    paddingTop: `${spacing(40)}px`,
    maxWidth: 1000,
    [breakpoints.down("sm")]: {
      paddingTop: `${spacing(30)}px`,
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
    padding: `${spacing(9)}px 0px`,
    maxWidth: "75%",
    [breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
  },
  header: {
    fontWeight: 600,
    fontSize: 40,
    marginBottom: 40,
  },
  contentHeader: {
    fontWeight: 600,
    fontSize: 40,
    marginBottom: 40,
    [breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  secondary: {
    fontWeight: "normal",
    marginBottom: 10,
    fontSize: 17,
  },
  description: {
    fontWeight: "normal",
    marginBottom: 10,
    fontSize: 17,
    [breakpoints.down("sm")]: {
      fontSize: 13,
    },
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "normal",
    [breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  image: {
    margin: "auto",
    alignSelf: "center",
    width: "100%",
    height: undefined,
    objectFit: "contain",
    marginBottom: 10,
    [breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  button: {
    marginBottom: 200,
    [breakpoints.down("sm")]: {
      marginBottom: 80,
    },
  },
}));

const Tokenomics: React.FC = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const mobileImg = useMediaQuery(theme.breakpoints.down("sm"));

  const CARD_LIST = [
    {
      header: "01.",
      title: "Gas Metering",
      content: "Supporting the gas metering of smart contract execution",
    },
    {
      header: "02.",
      title: "Protocol Security",
      content:
        "Incentivizing network participants and powering the mechanics around pricing and liquidity farming and so on",
    },
    {
      header: "03.",
      title: "Onchain Governance",
      content:
        "Facilitating the on-chain governance mechanism including proposing referenda, electing council members, voting, etc.",
    },
    {
      header: "04.",
      title: "Network Transactions",
      content: "Paying for transaction fees on the network",
    },
  ];

  return (
    <StyledDiv>
      <Container className={classes.top}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item sm={12} md={12}>
            <Typography variant="h1" align="center" paragraph className={classes.header}>
              DeltaFi (DELFI) Utility Token
            </Typography>
            <Typography variant="h6" align="center" paragraph className={classes.text}>
              DELFI is the utility token of the DeltaFi network. The primary deployment of the DeltaFi network will be
              on Solana.
            </Typography>
          </Grid>
          <Box marginTop={4} className={classes.button}>
            <RewardButton color="primary" href={HOMEPAGE_LINK}>
              Learn More
            </RewardButton>
          </Box>
          <Grid item sm={12} md={12}>
            <Typography variant="h1" align="center" paragraph className={classes.contentHeader}>
              DELFI Token Utility
            </Typography>
            <Typography variant="h6" align="center" paragraph className={classes.secondary}>
              As a decentralized financial market. DeltaFi requires the DELFI token to function. This token is central
              to the design of DeltaFi and cannot be removed without sacrificing essential functionality.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.content}>
        <Grid container>
          <Typography variant="h6" paragraph className={classes.description}>
            The uses of the DELFI token include but not limited to
          </Typography>

          <Grid container spacing={3}>
            {CARD_LIST.map((card, index) => (
              <Grid item key={`card-${index}`} xs="auto" md={6}>
                <Card>
                  <Box padding={4}>
                    <Typography paragraph className="card-header">
                      {card.header}
                    </Typography>
                    <Typography variant="h5" paragraph className="card-title">
                      {card.title}
                    </Typography>
                    <Typography variant="h6" paragraph className="card-content">
                      {card.content}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Box justifyContent="center" alignItems="center" display="flex">
        {mobileImg ? (
          <img src="images/Token chart.svg" alt="" className={classes.image} />
        ) : (
          <img src="images/token allocation.svg" alt="" className={classes.image} />
        )}
      </Box>
      <Container className={classes.content}>
        <Grid container>
          <Typography variant="h1" paragraph className={classes.contentHeader}>
            Allocation Details
          </Typography>
          {mobileImg ? (
            <img src="images/Allocation Details.svg" alt="" className={classes.image} />
          ) : (
            <img src="images/allocation table.svg" alt="" className={classes.image} />
          )}
          <Typography variant="h6" paragraph className={classes.description}>
            <strong>Note: </strong>
            The above numbers are rounded to the closest percentage.
          </Typography>
        </Grid>
      </Container>
    </StyledDiv>
  );
};

export default Tokenomics;

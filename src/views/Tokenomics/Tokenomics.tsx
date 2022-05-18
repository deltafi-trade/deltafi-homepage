import React from "react";
import styled from "styled-components";
import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Title from "components/Title";
import ReleaseSchedule from "./components/ReleaseSchedule";

const StyledDiv = styled.div``;

const Card = styled(Grid)`
  height: 170px;
  border-radius: 10px;
  background-origin: border-box;
  background-size: cover;
  margin-top: 30px;
  ${({ theme }) => theme.muibreakpoints.down("md")} {
    height: auto;
    margin-top: 20px;
  }

  .card-header {
    font-size: 16px;
    font-weight: normal;
  }

  .card-title {
    font-weight: bold;
  }
`;

const StyledTbCt = styled(TableContainer)`
  margin-top: 60px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border-radius: 12px;
  ${({ theme }) => theme.muibreakpoints.down("md")} {
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 8px;
  }
`;
const StyledTbCl = styled(TableCell)`
  padding: ${({ theme }) => theme.spacing(3)};
  ${({ theme }) => theme.muibreakpoints.down("md")} {
    padding: ${({ theme }) => theme.spacing(2)};
  }
  ${({ theme }) => theme.muibreakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(1)};
      overflow-wrap: break-word;
  }
  &:first-child {
    padding-left: ${({ theme }) => theme.spacing(8)};
    ${({ theme }) => theme.muibreakpoints.down("md")} {
      padding-left: ${({ theme }) => theme.spacing(4)};
    }
    ${({ theme }) => theme.muibreakpoints.down("sm")} {
      padding-left: ${({ theme }) => theme.spacing(1)};
    }
  }
  &:last-child {
    padding-right: ${({ theme }) => theme.spacing(8)};
    ${({ theme }) => theme.muibreakpoints.down("md")} {
      padding-right: ${({ theme }) => theme.spacing(4)};
    }
    ${({ theme }) => theme.muibreakpoints.down("sm")} {
      padding-right: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

const useStyles = makeStyles(({ palette, breakpoints, spacing }: Theme) => ({
  top: {
    backgroundImage: "url(/images/token-bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    paddingTop: spacing(20),
    paddingBottom: spacing(20),
    [breakpoints.down("md")]: {
      paddingTop: spacing(20),
      paddingBottom: spacing(10),
    },
  },
  ultilities: {
    paddingTop: spacing(8),
    paddingBottom: spacing(8),
  },
  content: {
    padding: `${spacing(7)}`,
    [breakpoints.down("sm")]: {
      padding: `${spacing(4)}`,
    },
  },
  allocationContent: {
    justifyContent: "center",
    alignItems: "stretch",
    paddingTop: spacing(5),
    [breakpoints.down("md")]: {
      direction: "column",
      paddingTop: spacing(2),
      maxWidth: 600,
      margin: "auto",
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
    fontSize: 12,
    margin: "auto",
    textAlign: "center",
  },
  tableLayout: {
    [breakpoints.down("sm")]: {
      tableLayout: "fixed",
    },
  },
  tableHead: {
    color: "#E0E0E0",
    opacity: 0.6,
    fontSize: 20,
    fontWeight: 600,
    [breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  title: {
    fontFamily: "poppins",
    margin: "0 auto 10px",
    fontWeight: 400,
    fontSize: 16,
    textAlign: "center",
    [breakpoints.down("md")]: {
      width: "85%",
      fontSize: 16,
    },
  },
  titleHeader: {
    color: palette.primary.main,
    fontWeight: 700,
    fontSize: "36px",
    textAlign: "center",
  },
}));

const Tokenomics: React.FC = (props) => {
  const classes = useStyles(props);

  const CARD_LIST = [
    {
      header: "01.",
      title: "Reward Metering",
      content: "Supporting the reward metering of smart contract execution",
      background: "/images/utility-bg1.png",
      color: "#D4FF00",
    },
    {
      header: "02.",
      title: "Onchain Governance",
      content:
        "Facilitating the on-chain governance mechanism including proposing referenda, electing council members, voting, etc",
      background: "/images/utility-bg2.png",
      color: "#03F2A0",
    },
    {
      header: "03.",
      title: "Network Transaction",
      content: "Paying for transaction fees on the network",
      background: "/images/utility-bg3.png",
      color: "#2F80ED",
    },
    {
      header: "04.",
      title: "Protocal Security",
      content:
        "Incentivizing network participants and powering the mechanics around pricing, liquidity farming, and so on",
      background: "/images/utility-bg3.png",
      color: "#693EFF",
    },
  ];

  const ALLOCATION_LIST = [
    { title: "Total Supply", content: "1 billion tokens will be minted on Solana network." },
    {
      title: "Inflation",
      content: "There will be no inflation. The total supply has a hard cap of 1 billion in total.",
    },
    { title: "Initial Circulating Supply", content: "1% for public sale to the reward the initial community. " },
  ];

  const ALLOCATION_TABLE = [
    {
      allocation: "Private Investors",
      amount: "180,000,000",
      "%": "18%",
      description:
        "Angel and seed funding. Subject to 24-month vesting schedule from network launch with a 12 month lock and monthly vesting.",
    },
    {
      allocation: "Community & Ecosystem",
      amount: "660,000,000",
      "%": "66%",
      description:
        "Allocation to incentivize the ecosystem and community. For example, it is can be used for liquidity mining, trade mining and initial professional market makers.",
    },
    {
      allocation: "Public Sale",
      amount: "10,000,000",
      "%": "1%",
      description: "Initial liquidity supply to the community.",
    },
    {
      allocation: "Team",
      amount: "150,000,000",
      "%": "15%",
      description:
        "Development, marketing and operation team. Subject to 48-month vesting schedule from network launch with a 12-month lock and monthly vesting.",
    },
  ];

  return (
    <StyledDiv>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item sm={12} md={12} className={classes.top}>
            <Title
              header="DeltaFi (DELFI) Utility Token"
              title="DELFI is the utility token of the DeltaFi network. The primary deployment of the DeltaFi network will be on Solana."
            ></Title>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.content}>
        <Typography variant="h3" paragraph className={classes.titleHeader}>
          DELFI Token Utility
        </Typography>
        <Typography className={classes.title}>
          As a decentralized financial market. DeltaFi requires the DELFI token to function. This token is central to
          the design of DeltaFi and cannot be removed without sacrificing essential functionality.The uses of the DELFI
          token include but not limited to
        </Typography>
        <Grid container columnSpacing={3}>
          {CARD_LIST.map((card, index) => (
            <Grid item key={`card-${index}`} xs={12} md={6}>
              <Card sx={{ backgroundImage: `url(${card.background})` }}>
                <Box paddingTop={5} paddingLeft={5} paddingRight={5}>
                  <Typography className="card-header" color={card.color}>
                    {card.header}
                  </Typography>
                  <Typography variant="h6" className="card-title" color={card.color}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" paddingTop={1}>
                    {card.content}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container className={classes.content}>
        <Typography variant="h3" paragraph className={classes.titleHeader}>
          DELFI Token Allocation
        </Typography>
        <Grid container className={classes.allocationContent}>
          <Grid item container direction="column" sm={12} md={6}>
            {ALLOCATION_LIST.map((it) => (
              <Grid item md={4} key={it.title} minHeight={90}>
                <Typography variant="h6" fontWeight={600}>
                  {it.title}
                </Typography>
                <Typography variant="body2">{it.content}</Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item sm={12} md={6}>
            <Box component="img" src="/images/token-allocation.svg" maxWidth="100%"></Box>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.content}>
        <ReleaseSchedule />
      </Container>

      <Container className={classes.content}>
        <Title size="small" header="Allocation Details"></Title>
        <StyledTbCt>
          <Table className={classes.tableLayout} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTbCl className={classes.tableHead}>Allocation</StyledTbCl>
                <StyledTbCl className={classes.tableHead}>Amount</StyledTbCl>
                <StyledTbCl width={48} className={classes.tableHead}>
                  %
                </StyledTbCl>
                <StyledTbCl className={classes.tableHead}>Description</StyledTbCl>
              </TableRow>
            </TableHead>
            <TableBody>
              {ALLOCATION_TABLE.map((row, idx) => (
                <TableRow key={`row-${idx}`}>
                  <StyledTbCl sx={{ border: 0}}>
                    <Typography variant="body2" fontWeight={400} color="#D4FF00">
                      {row.allocation}
                    </Typography>
                  </StyledTbCl>
                  <StyledTbCl sx={{ border: 0 }}>
                    <Typography variant="body2" fontWeight={400}>
                      {row.amount}
                    </Typography>
                  </StyledTbCl>
                  <StyledTbCl sx={{ border: 0}}>
                    <Typography variant="body2" fontWeight={400}>
                      {row["%"]}
                    </Typography>
                  </StyledTbCl>
                  <StyledTbCl sx={{ border: 0}}>
                    <Typography variant="body2" fontWeight={400}>
                      {row.description}
                    </Typography>
                  </StyledTbCl>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTbCt>
        <Typography variant="h6" paragraph className={classes.description}>
          *The above numbers are rounded to the closest percentage.
        </Typography>
      </Container>
      <Container className={classes.content}>
        <Box fontSize={12} fontWeight={400} textAlign="center">
          All information made available, including claims, content, designs, algorithms, estimates, roadmaps,
          specifications, and performance measurements described in this project are provided for informational purposes
          only. It is up to the reader to check and validate the accuracy and truthfulness. Furthermore, nothing in this
          project information constitutes a solicitation for investment. No developer or entity involved in creating the
          DeltaFi protocol or authoring this information will be liable for any claims or damages whatsoever associated
          with your use, inability to use, or your interaction with other users of, the DeltaFi protocol or any
          information made available on this website, including any direct, indirect, incidental, special, exemplary,
          punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
          All information contained herein is subject to modification without notice.
        </Box>
      </Container>
    </StyledDiv>
  );
};

export default Tokenomics;

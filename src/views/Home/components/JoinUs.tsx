import { Theme, Container, Grid, Box, Link } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import styled, { keyframes } from "styled-components";
import Title from "components/Title";
// import { Button } from "components/Button";
// import { SUBMITBUG_LINK } from "config/constants/constant";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 98px 0 60px;
  text-align: center;

  .subtitle {
    margin-top: 16px;
    margin-bottom: 68px;
  }
  .deposit-text {
    margin-top: 48px;
  }

  ${({ theme }) => theme.muibreakpoints.down("md")} {
    padding: 56px 0 36px;
    .deposit-text {
      margin-top: 32px;
    }
  }
  ${({ theme }) => theme.muibreakpoints.down("sm")} {
    padding: 56px 0 24px;
    .deposit-text {
      margin-top: 24px;
    }
  }
`;

const transition = keyframes`
  0% {transform: translate3d(0, 0, 0);}
  33.3% {transform: translate3d(-16.7%, 0, 0);}
  66.6% {transform: translate3d(-33.3%, 0, 0);}
  100% {transform: translate3d(-50%, 0, 0);}
`;

const AnimateContainer = styled.div`
  overflow: hidden;
  display: flex;
  width: 200%;
  min-width: 2000px;
  ${({ theme }) => theme.muibreakpoints.down("sm")} {
    min-width: 1000px;
  }
  margin: 0 auto;
  animation: ${transition} 15s infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const InvestorCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  ${({ theme }) => theme.muibreakpoints.down("sm")} {
    padding: 12px 0;
  }
`;

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
  title: {
    maxWidth: 850,
    marginBottom: 10,
    fontWeight: 500,
    fontSize: 37,
    [breakpoints.down("sm")]: {
      fontSize: 25,
      marginTop: 50,
    },
  },
  button: {
    backgroundColor: "#7650F5",
    color: palette.text.primary,
    borderRadius: 100,
    border: "solid 1px transparent",
    backgroundOrigin: "border-box",

    "&:hover": {
      backgroundColor: "#6d47ed",
    },

    height: 43,
    width: 165,
    fontSize: 18,
    fontWeight: 500,
    textTransform: "none",

    [breakpoints.down("sm")]: {
      height: 32,
      width: 105,
      fontSize: 12,
    },
  },
  investor: {
    height: 80,
    maxWidth: 300,
    [breakpoints.down("md")]: {
      height: 60,
      maxWidth: 225,
    },
    [breakpoints.down("sm")]: {
      height: 40,
      maxWidth: 150,
    },
  },
}));

function JoinUs() {
  const classes = useStyles();

  const INVESTOR_LIST = [
    {
      img: "/images/jump-capital.svg",
      href: "https://jumpcap.com/",
    },
    {
      img: "/images/dark-hashed.svg",
      href: "https://www.hashed.com/",
    },
    {
      img: "/images/wormhole.svg",
      href: "https://wormholenetwork.com",
    },
    {
      img: "/images/solana.svg",
      href: "https://solana.com/",
    },
    {
      img: "/images/pyth.svg",
      href: "https://pyth.network/",
    },
    {
      img: "/images/dark-hashkey.svg",
      href: "https://www.hashkey.com/",
    },
  ];

  return (
    <Container>
      <StyledDiv>
        <Title header="Strategic Investors and Partners" />
        <Box sx={{ position: "relative", overflow: "hidden", width: "100%", marginTop: "12px", marginBottom: "72px" }}>
          <AnimateContainer>
            <Grid container style={{ alignItems: "center", justifyContent: "center" }}>
              {[
                ...INVESTOR_LIST.slice(0, 3),
                ...INVESTOR_LIST.slice(0, 3),
                ...INVESTOR_LIST.slice(3, 6),
                ...INVESTOR_LIST.slice(3, 6),
                ...INVESTOR_LIST.slice(6, -1),
              ].map((card, index) => (
                <Grid item key={`card-${index}`} xs={2} md={2}>
                  <InvestorCard>
                    <Link href={card.href} target="_blank" rel="noreferrer noopener">
                      <img src={card.img} alt="" className={classes.investor} />
                    </Link>
                  </InvestorCard>
                </Grid>
              ))}
            </Grid>
          </AnimateContainer>
        </Box>
        {/* <Title header="ImmuneFi Bug Bounty"/>
        <Box sx={{ marginTop: "40px"}}>
          <Button color="primary" href={SUBMITBUG_LINK}>
            Submit a Bug
          </Button>
        </Box> */}
      </StyledDiv>
    </Container>
  );
}

export default JoinUs;

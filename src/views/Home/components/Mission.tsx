import { Grid, Box, Typography, Theme } from "@mui/material";
import styled from "styled-components";
import SectionContainer from "components/SectionContainer";
import { makeStyles } from "@mui/styles";

const boxes = [
  {
    title: "Oracle Centered Pricing",
    color: "#D4FF00",
    content: "Pyth Network oracles are used for fair prices.",
    image: "/images/balance.png",
  },
  {
    title: "Sustainable Liquidity Yields",
    color: "#693EFF",
    content: "Predictive bond curve eliminates liquidity loss.",
    image: "/images/coin.png",
  },
  {
    title: "Native to Native Swap",
    color: "#03F2A0",
    content: "Wormhole protocol empowers cross chain swap.",
    image: "/images/shakehand.png",
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: "'Poppins'",
    fontWeight: 400,
    fontSize: 16,
    textAlign: "center",
    marginBottom: -48,
    [theme.breakpoints.down("md")]: {
      width: "85%",
      fontSize: 16,
    },
  },
  header: {
    fontFamily: "'Exo 2'",
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "center",
    fontSize: 36,
  },
}));

const StyledItem = styled(Grid)`
  align-item: center;
  display: flex;
  flex-deriction: column;
  justify-content: center;
`;

const Mission: React.FC = () => {
  const classes = useStyles();

  return (
    <SectionContainer>
      <Typography variant="h3" paragraph className={classes.header}>
        Swap & Earn!
      </Typography>
      <Typography className={classes.title}>DeltaFi is built for traders and liquidity providers.</Typography>
      <Grid container spacing={2}>
        {boxes.map((box, i) => (
          <StyledItem key={i} container item md={4} xs={12}>
            <Grid item>
              <Box
                sx={{
                  maxHeight: 380,
                  maxWidth: 380,
                  width: "100%",
                }}
                component="img"
                src={box.image}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  color: box.color,
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: {
                    xs: 16,
                    md: 24,
                  },
                  lineHeight: 1.1,
                  display: "flex",
                  height: 30,
                  marginTop: -4,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>{box.title}</div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  lineHeight: 1.1,
                  height: 20,
                  marginTop: 1.5,
                  textAlign: "center",
                  fontFamily: "'Roboto'",
                  fontSize: 14,
                }}
              >
                {box.content}
              </Box>
            </Grid>
          </StyledItem>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Mission;

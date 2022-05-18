import React from "react";
import styled from "styled-components";
import { Box, Container, Grid, Theme, Typography } from "@mui/material";
import { Button, RewardButton } from "components";
import useDarkMode from "hooks/useDarkMode";
import { makeStyles } from "@mui/styles";
import { APP_LINK, REWARD_LINK } from "config/constants/constant";
import SocialLinks from "components/SocialLinks";

interface ContainerProps {
  isDark: boolean;
}

const Main = styled.div<ContainerProps>``;

const StyledDiv = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 200px 120px;
  ${({ theme }) => theme.muibreakpoints.down("md")} {
    padding: 150px 20px;
  }
  height: 700px;
`;
const Wrapper = styled.div`
  flex-direction: column;
  text-align: center;

  .asset-title {
    font-weight: 600;
  }

  img {
    max-width: 100%;

    ${({ theme }) => theme.muibreakpoints.down("md")} {
      max-height: 328px;
    }
    ${({ theme }) => theme.muibreakpoints.down("sm")} {
      max-height: none;
    }
  }
`;
const DesktopWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 500px;
  margin: ${({ theme }) => theme.spacing(5)} auto;
  lineheight: 40px;

  ${({ theme }) => theme.muibreakpoints.down("sm")} {
    margin-top: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    max-width: 90%;
  }
`;

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontWeight: 700,
    fontSize: 56,
    [theme.breakpoints.down("sm")]: {
      fontSize: 33,
    },
    marginTop: 16,
    textTransform: "capitalize",
  },
  subTitle: {
    textTransform: "capitalize",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.4,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "95%",
    },
  },
  poweredby: {
    height: 18,
    marginLeft: 8,
  },
}));

const AssetManager: React.FC = () => {
  const { isDark } = useDarkMode();
  const classes = useStyles();

  return (
    <Main isDark={isDark}>
      <StyledDiv>
        <Grid container alignItems="center" justifyContent="center">
          <Wrapper>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography className={classes.subTitle}>Built On</Typography>
              <img src="/images/solana.svg" alt="Powered by solala" className={classes.poweredby} />
            </Box>
            <Typography variant="h1" className={classes.title}>
              Automated Market Maker Evolved
            </Typography>
            <br />
            <Typography variant="h6" className={classes.subTitle} sx={{ fontSize: 20, fontWeight: 500 }}>
              Earn Sustainable Yields through Oracle Concentrated Liquidity
            </Typography>
            <DesktopWrapper>
              <Button color="secondary" href={APP_LINK}>
                <Box lineHeight={2}>Launch APP</Box>
              </Button>
              <RewardButton color="secondary" href={REWARD_LINK}>
                <Box lineHeight={2}>Invite and Earn</Box>
              </RewardButton>
            </DesktopWrapper>
            <SocialLinks />
          </Wrapper>
        </Grid>
      </StyledDiv>
    </Main>
  );
};

export default AssetManager;

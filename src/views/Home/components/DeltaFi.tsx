import React from "react";
import styled from "styled-components";
import { Container, Grid, Typography } from "@mui/material";
import Title from "components/Title";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 98px 0 60px;
  text-align: center;

  ${({ theme }) => theme.muibreakpoints.down("md")} {
    padding: 56px 0 36px;
    .deposit-text {
      margin-top: 32px;
    }
  }
  ${({ theme }) => theme.muibreakpoints.down("sm")} {
    padding: 38px 0 24px;
    .deposit-text {
      margin-top: 24px;
    }
  }
`;

const StyledImg = styled.img`
  width: 100%;
  
  margin: 36px 0 16px;
  ${({ theme }) => theme.muibreakpoints.down("md")} {
    margin: auto;
    margin-bottom: 16px;
    max-width: 580px;
  }
`

const DeltaFi: React.FC = () => {

  const WHY_LIST = [
    {
      header: "Efficient Pricing Algorithm",
      title: "No Liquidity Loss",
      image: "/images/algorithms.png",
    },
    {
      header: "Community Driven Development",
      title: "Fully decentralized",
      image: "/images/development.png",
    },
  ];

  return (
    <Container>
      <StyledDiv>
        <Title
          header="Why DeltaFi?"
          title="High Yields, Deep Liquidity, and DAO Governed" />
        <Grid container spacing={3}>
          {WHY_LIST.map((card, index) => (
            <Grid item key={`card-${index}`} xs={12} md={6}>
              <StyledImg src={card.image}/>
              <Typography variant="h5" fontWeight={600}>
                {card.header}
              </Typography>
              <Typography variant="subtitle2" textTransform="capitalize" fontWeight={400} sx={{marginTop: 1.5}}>
                {card.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </StyledDiv>
    </Container>
  );
};

export default DeltaFi;

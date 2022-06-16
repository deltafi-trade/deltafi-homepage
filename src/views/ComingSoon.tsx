import styled from "styled-components";
import { Button, Typography } from "@mui/material";

const StyledComingSoon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

function ComingSoon() {
  return (
    <StyledComingSoon>
      <Typography variant="h2" margin={2}>
        Coming Soon {"\n"}
      </Typography>
      <Typography variant="subtitle2">This page is under active developement</Typography>
      <Button href="/">Back Home</Button>
    </StyledComingSoon>
  );
}

export default ComingSoon;

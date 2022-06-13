import styled from "styled-components";
import { Button, Typography } from "@mui/material";

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

function ComingSoon() {
  return (
    <StyledNotFound>
      <Typography variant="h5">Comming Soon</Typography>
      <Typography variant="subtitle2">This page is under active developement</Typography>
      <Button href="/">Back Home</Button>
    </StyledNotFound>
  );
}

export default ComingSoon;

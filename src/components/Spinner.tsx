import React from "react";
import styled, { keyframes } from "styled-components";
import { DeltaIcon } from "components";

interface SpinnerProps {
  size?: number;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const RotatingIcon = styled(DeltaIcon)`
  position: absolute;
  top: 40%;
  left: 40%;
  animation: ${rotate} 2s linear infinite;
  transform: translate(-50%, -50%);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;

import React from "react";
import styled from "styled-components";

const StyledVideo = styled.video`
  position: absolute;
  right: 0;
  height: 700px;
  min-width: 100%;
  object-fit: cover;
  top: 0;
`;

const Video: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <StyledVideo autoPlay muted loop id="myVideo">
    <source src="/videos/landing-bg.mp4" type="video/mp4" />
  </StyledVideo>
);

export default Video;

import React from "react";
import styled from "styled-components";

const StyledVideo = styled.video`
  position: absolute;
  right: 0;
  top: 90px;
  height: calc(100% - 90px);
  min-width: 100%;
  object-fit: cover;
  ${({ theme }) => theme.muibreakpoints.down("md")} {
    top: 60px;
    height: calc(100% - 60px);
}
`

 const Video: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
    <StyledVideo autoPlay muted loop id="myVideo">
        <source src="/videos/landing-bg.mp4" type="video/mp4" />
    </StyledVideo>
  );

  export default Video;
import { Container } from "@mui/material";
import Title from "components/Title";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin-top: 60px;
  margin-bottom: 30px;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */
  margin-top: 40px;
  max-width: 1200px;
  max-height: 760px;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoContainer: React.FC = () => {
  return (
    <StyledContainer>
      <Title
        header="Swap & Earn!"
        title="DeltaFi makes it easy for you to swap and earn on the Solana blockchain."
      />
      <VideoWrapper>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/xB58mHME_bw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
    </StyledContainer>
  );
};

export default VideoContainer;

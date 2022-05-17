import React from "react";
import Page from "components/layout/Page";

import AssetManager from "./components/AssetManager";
// import DeltaFi from "./components/DeltaFi";
import JoinUs from "./components/JoinUs";
import Numbers from "./components/Numbers";
import LandingVideo from "./components/LandingVideo";
import Mission from "./components/Mission";
import Trades from "./components/Trades";

// import VideoContainer from "./components/VideoContainer";

const Home: React.FC = () => {
  return (
    <>
      <Page>
        <LandingVideo />
        <AssetManager />
      </Page>
      <Trades></Trades>
      <Numbers />
      <Page>
        <Mission />
      </Page>
      {/* <DeltaFi/> */}
      {/* <VideoContainer/> */}
      <JoinUs />
    </>
  );
};

export default Home;

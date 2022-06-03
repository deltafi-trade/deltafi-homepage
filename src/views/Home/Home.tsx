import React from "react";
import Page from "components/layout/Page";

import AssetManager from "./components/AssetManager";
// import DeltaFi from "./components/DeltaFi";
import JoinUs from "./components/JoinUs";
import Numbers from "./components/Numbers";
import LandingVideo from "./components/LandingVideo";
import Mission from "./components/Mission";
import Trades from "./components/Trades";
import { useSelector } from "react-redux";
import { poolStateSelector } from "states/store";
import BigNumber from "bignumber.js";
import { valueToDisplayFormat } from "util/utils";

// import VideoContainer from "./components/VideoContainer";

const Home: React.FC = () => {
  const pools = useSelector(poolStateSelector);
  let totalAssetsSupplied = new BigNumber(0);
  let totalTradingVolume = new BigNumber(0);
  pools.forEach((pool) => {
    totalAssetsSupplied = totalAssetsSupplied.plus(pool.liquidity);
    totalTradingVolume = totalTradingVolume.plus(pool.tradingVolume);
  });

  return (
    <>
      <Page>
        <LandingVideo />
        <AssetManager />
      </Page>
      <Trades pools={pools} />
      <Numbers
        totalAssetsSupplied={valueToDisplayFormat(totalAssetsSupplied)}
        totalTradingVolume={valueToDisplayFormat(totalTradingVolume)}
      />
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

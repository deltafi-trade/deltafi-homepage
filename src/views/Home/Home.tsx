import React, { useMemo } from "react";
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

  const { totalAssetsSupplied, totalTradingVolume } = useMemo(() => {
    if (!pools) {
      return {
        totalAssetsSupplied: new BigNumber(NaN),
        totalTradingVolume: new BigNumber(NaN),
      };
    }
    let totalAssetsSuppliedRes = new BigNumber(0);
    let totalTradingVolumeRes = new BigNumber(0);
    pools.forEach((pool) => {
      if (!pool.liquidity || !pool.tradingVolume) {
        // in case the data is not loaded completely
        return;
      }
      totalAssetsSuppliedRes = totalAssetsSuppliedRes.plus(pool.liquidity);
      totalTradingVolumeRes = totalTradingVolumeRes.plus(pool.tradingVolume);
    });

    return {
      totalAssetsSupplied: totalAssetsSuppliedRes,
      totalTradingVolume: totalTradingVolumeRes,
    };
  }, [pools]);

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

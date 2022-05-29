
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import fullDeploymentConfigV2 from "../config/constants/fullDeployConfigV2.json";
import { Connection, clusterApiUrl, Cluster } from "@solana/web3.js";

const initialState = {
  pools: [],
};


const deploymentName = "mainnet-test";

export async function getPoolsData() {
  const deploymentConfig = fullDeploymentConfigV2[deploymentName];
  const connection = new Connection(clusterApiUrl(deploymentConfig.network as Cluster), "confirmed");
  const symbolToUrlMap = {};

  deploymentConfig.tokenInfoList.forEach((tokenInfo) => {
    symbolToUrlMap[tokenInfo.symbol] = tokenInfo.logoURI;
  });

  const result = [];

  deploymentConfig.poolInfoList.forEach((poolInfo) => {
    result.push({
      baseToken: {
        logoURI: symbolToUrlMap[poolInfo.base],
        symbol: poolInfo.base,
      },
      quoteToken: {
        logoURI: symbolToUrlMap[poolInfo.quote],
        symbol: poolInfo.quote,
      },
      liquidity: 0,
      apy: 10,
    });
  });

  return { pools: result };
}

export const fetchPoolStateThunk = createAsyncThunk("homepage/fetchPoolState", getPoolsData);

export function calculatePoolLiquidity() {
}

export const poolStateReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPoolStateThunk.fulfilled, (state, action) => {
    state.pools = action.payload.pools;
  })
});


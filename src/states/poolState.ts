import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import fullDeploymentConfigV2 from "anchor/fullDeployConfigV2.json";
import { Connection, clusterApiUrl, Cluster, PublicKey } from "@solana/web3.js";
import { parsePriceData } from "@pythnetwork/client";
import { getDeltafiDexV2, makeProvider } from "anchor/anchor_utils";
import { SwapInfo } from "anchor/type_definitions";
import BigNumber from "bignumber.js";

interface PoolTokenInfo {
  logoURI: string;
  symbol: string;
}

export interface PoolStateInfo {
  baseToken: PoolTokenInfo;
  quoteToken: PoolTokenInfo;
  liquidity: string;
  tradingVolume: string;
  apy: string;
}

const initialState: {
  pools: PoolStateInfo[];
} = {
  pools: [],
};

async function getPoolStateData(deploymentName: string) {
  const deploymentConfig = fullDeploymentConfigV2[deploymentName];
  const connection = new Connection(clusterApiUrl(deploymentConfig.network as Cluster), "confirmed");
  const program = getDeltafiDexV2(new PublicKey(deploymentConfig.programId), makeProvider(connection, {}));
  const symbolToTokenInfoMap = {};

  const result: PoolStateInfo[] = [];

  // fetch token price info from pyth price accounts
  const priceData = await connection.getMultipleAccountsInfo(
    deploymentConfig.tokenInfoList.map((tokenInfo) => new PublicKey(tokenInfo.pyth.price)),
  );
  // fetch pool reserve info from our swapinfo accounts
  const swapInfoData = await program.account.swapInfo.fetchMultiple(
    deploymentConfig.poolInfoList.map(({ swapInfo }) => new PublicKey(swapInfo)),
  );

  for (let i = 0; i < deploymentConfig.tokenInfoList.length; i++) {
    const tokenInfo = deploymentConfig.tokenInfoList[i];
    const tokenPriceData = parsePriceData(priceData[i].data as Buffer);

    symbolToTokenInfoMap[tokenInfo.symbol] = { logoURI: tokenInfo.logoURI, price: tokenPriceData.price };
  }

  for (let i = 0; i < deploymentConfig.poolInfoList.length; i++) {
    const poolInfo = deploymentConfig.poolInfoList[i];
    const swapInfo = swapInfoData[i] as SwapInfo;
    const { tradingVolume, liquidity } = calculatePoolLiquidityAndTradingVolume(
      swapInfo,
      symbolToTokenInfoMap[poolInfo.base].price,
      symbolToTokenInfoMap[poolInfo.quote].price,
    );
    result.push({
      baseToken: {
        logoURI: symbolToTokenInfoMap[poolInfo.base].logoURI,
        symbol: poolInfo.base,
      },
      quoteToken: {
        logoURI: symbolToTokenInfoMap[poolInfo.quote].logoURI,
        symbol: poolInfo.quote,
      },
      liquidity,
      tradingVolume,
      apy: "TBD", // TODO: add apy calculation
    });
  }

  return { pools: result };
}

export const fetchPoolStateThunk = createAsyncThunk("homepage/fetchPoolState", getPoolStateData);

// calculate pool liquidity value from the token reserve and pyth price
function calculatePoolLiquidityAndTradingVolume(swapInfo: SwapInfo, basePrice: number, quotePrice: number) {
  const baseAmountDecimalFactor = new BigNumber(10).pow(swapInfo.mintBaseDecimals);
  const quoteAmountDecimalFactor = new BigNumber(10).pow(swapInfo.mintQuoteDecimals);

  const baseValue = new BigNumber(swapInfo.poolState.baseReserve.toString())
    .multipliedBy(basePrice)
    .dividedBy(baseAmountDecimalFactor);
  const quoteValue = new BigNumber(swapInfo.poolState.quoteReserve.toString())
    .multipliedBy(quotePrice)
    .dividedBy(quoteAmountDecimalFactor);
  const liquidity = baseValue.plus(quoteValue).toString();

  const baseTradingVolume = new BigNumber(swapInfo.poolState.totalTradedBase.toString())
    .multipliedBy(basePrice)
    .dividedBy(baseAmountDecimalFactor);
  const quoteTradingVolume = new BigNumber(swapInfo.poolState.totalTradedQuote.toString())
    .multipliedBy(quotePrice)
    .dividedBy(quoteAmountDecimalFactor);
  const tradingVolume = baseTradingVolume.plus(quoteTradingVolume).toString();

  return {
    liquidity,
    tradingVolume,
  };
}

export const poolStateReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPoolStateThunk.fulfilled, (state, action) => {
    state.pools = action.payload.pools;
  });
});

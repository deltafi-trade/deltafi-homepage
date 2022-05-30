import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import fullDeploymentConfigV2 from "anchor/fullDeployConfigV2.json";
import { Connection, clusterApiUrl, Cluster, PublicKey } from "@solana/web3.js";
import { parsePriceData, PriceData } from "@pythnetwork/client";
import { getDeltafiDexV2, makeProvider } from "anchor/anchor_utils";
import { SwapInfo } from "anchor/type_definitions";
import BigNumber from "bignumber.js";

export interface PoolTokenInfo {
  logoURI: string;
  symbol: string;
}

export interface PoolStateInfo {
  baseToken: PoolTokenInfo;
  quoteToken: PoolTokenInfo;
  liquidity: string;
  apy: number;
}

const initialState: {
  pools: PoolStateInfo[];
} = {
  pools: [],
};

// const deploymentName = "mainnet-test";

export async function getPoolsData(deploymentName: string) {
  const deploymentConfig = fullDeploymentConfigV2[deploymentName];
  const connection = new Connection(clusterApiUrl(deploymentConfig.network as Cluster), "confirmed");
  const program = getDeltafiDexV2(new PublicKey(deploymentConfig.programId), makeProvider(connection, {}));
  const symbolToTokenInfoMap = {};

  const result: PoolStateInfo[] = [];

  const priceData = await connection.getMultipleAccountsInfo(
    deploymentConfig.tokenInfoList.map((tokenInfo) => new PublicKey(tokenInfo.pyth.price)),
  );
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

    result.push({
      baseToken: {
        logoURI: symbolToTokenInfoMap[poolInfo.base].logoURI,
        symbol: poolInfo.base,
      },
      quoteToken: {
        logoURI: symbolToTokenInfoMap[poolInfo.quote].logoURI,
        symbol: poolInfo.quote,
      },
      liquidity: calculatePoolLiquidity(
        swapInfo,
        symbolToTokenInfoMap[poolInfo.base].price,
        symbolToTokenInfoMap[poolInfo.quote].price,
      ),
      apy: 0,
    });
  }

  console.log(result);

  return { pools: result };
}

export const fetchPoolStateThunk = createAsyncThunk("homepage/fetchPoolState", getPoolsData);

export function calculatePoolLiquidity(swapInfo: SwapInfo, basePrice: number, quotePrice: number) {
  const baseAmountDecimalFactor = new BigNumber(10).pow(swapInfo.mintBaseDecimals);
  const quoteAmountDecimalFactor = new BigNumber(10).pow(swapInfo.mintQuoteDecimals);

  const baseValue = new BigNumber(swapInfo.poolState.baseReserve.toString())
    .multipliedBy(basePrice)
    .dividedBy(baseAmountDecimalFactor);
  const quoteValue = new BigNumber(swapInfo.poolState.quoteReserve.toString())
    .multipliedBy(quotePrice)
    .dividedBy(quoteAmountDecimalFactor);

  const totalValue = baseValue.plus(quoteValue);

  const billion = 100_000_000;
  const million = 100_000;
  const thousand = 1000;

  if (totalValue.isGreaterThan(billion)) {
    return "$" + totalValue.dividedBy(billion).toFixed(2) + "B";
  } else if (totalValue.isGreaterThan(million)) {
    return "$" + totalValue.dividedBy(million).toFixed(2) + "M";
  } else if (totalValue.isGreaterThan(thousand)) {
    return "$" + totalValue.dividedBy(thousand).toFixed(2) + "K";
  }

  return "$" + totalValue.dividedBy(million).toFixed(2);
}

export const poolStateReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPoolStateThunk.fulfilled, (state, action) => {
    state.pools = action.payload.pools;
  });
});

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
    const basePrice = symbolToTokenInfoMap[poolInfo.base].price;
    const quotePrice = symbolToTokenInfoMap[poolInfo.quote].price;

    const { tradingVolume, liquidity } = calculatePoolLiquidityAndTradingVolume(swapInfo, basePrice, quotePrice);
    const lastDaytradingVolume = getLastDayTradingVolume();

    const apy = calculateApy(
      lastDaytradingVolume, // hard code to 0
      new BigNumber(swapInfo.swapConfig.tradeFeeNumerator).dividedBy(swapInfo.swapConfig.tradeFeeDenominator),
      new BigNumber(liquidity),
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
      apy,
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

function getDelfiPrice(): BigNumber {
  return new BigNumber(0.2); // TODO: fetch it from gate.io
}

function getLastDayTradingVolume(): BigNumber {
  return new BigNumber(0); // TODO: get record trading volume and get it
}

function calculateApy(lastDaytradingVolume: BigNumber, feeRate: BigNumber, liquidity: BigNumber): string {
  const DAYS_OF_YEAR = 365;
  const delfiPrice = getDelfiPrice();
  const dailyRewardRate = lastDaytradingVolume.multipliedBy(feeRate).multipliedBy(delfiPrice).dividedBy(liquidity);
  const apy = dailyRewardRate.multipliedBy(DAYS_OF_YEAR);

  return apy.multipliedBy(100).toFixed(2) + "%";
}

export const poolStateReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPoolStateThunk.fulfilled, (state, action) => {
    state.pools = action.payload.pools;
  });
});

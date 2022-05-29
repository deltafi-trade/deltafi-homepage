import fullDeploymentConfigV2 from "../config/constants/fullDeployConfigV2.json";
import { Connection, clusterApiUrl, Cluster } from "@solana/web3.js";

const deploymentName = "mainnet-test";

export function parseDeploymentConfig() {
  const deploymentConfig = fullDeploymentConfigV2[deploymentName];
  const connection = new Connection(
    clusterApiUrl(deploymentConfig.network as Cluster),
    "confirmed",
  );
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

  return result;
}

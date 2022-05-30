import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

export interface PoolState {
  marketPrice: anchor.BN;
  baseReserve: anchor.BN;
  quoteReserve: anchor.BN;
  targetBaseReserve: anchor.BN;
  targetQuoteReserve: anchor.BN;
  baseSupply: anchor.BN;
  quoteSupply: anchor.BN;
  totalTradedBase: anchor.BN;
  totalTradedQuote: anchor.BN;
  accumulatedTradeReward: anchor.BN;
  lastRewardWindowStartTimestamp: anchor.BN;
  reservedU64: Array<any>;
}

export interface FarmPosition {
  depositedAmount: anchor.BN;
  rewardsOwed: anchor.BN;
  cumulativeInterest: anchor.BN;
  lastUpdateTs: anchor.BN;
  nextClaimTs: anchor.BN;
  latestDepositSlot: anchor.BN;
}

export interface FarmConfig {
  baseAprNumerator: anchor.BN;
  baseAprDenominator: anchor.BN;
  quoteAprNumerator: anchor.BN;
  quoteAprDenominator: anchor.BN;
  minClaimPeriod: number;
  isPaused: boolean;
  reservedU64: Array<any>;
}

export interface SwapConfig {
  isPaused: boolean;
  enableConfidenceInterval: boolean;
  maxSwapPercentage: number;
  minReserveLimitPercentage: number;
  serumMarketTokenRatioLimitPercentage: number;
  adminTradeFeeNumerator: number;
  adminTradeFeeDenominator: number;
  adminWithdrawFeeNumerator: number;
  adminWithdrawFeeDenominator: number;
  tradeFeeNumerator: number;
  tradeFeeDenominator: number;
  withdrawFeeNumerator: number;
  withdrawFeeDenominator: number;
  tradeRewardNumerator: number;
  tradeRewardDenominator: number;
  referralRewardNumerator: number;
  referralRewardDenominator: number;
  maxStablePriceDiffNumerator: number;
  maxStablePriceDiffDenominator: number;
  tradeRewardCap: anchor.BN;
  tradeRewardMaxReserve: anchor.BN;
  slope: anchor.BN;
  reservedU64: Array<any>;
}

export type SwapDirection = { sellBase?: any; sellQuote?: never } | { sellBase?: never; sellQuote?: any };

export type AccountType =
  | { unknown?: any; mapping?: never; product?: never; price?: never }
  | { unknown?: never; mapping?: any; product?: never; price?: never }
  | { unknown?: never; mapping?: never; product?: any; price?: never }
  | { unknown?: never; mapping?: never; product?: never; price?: any };

export type PriceStatus =
  | { unknown?: any; trading?: never; halted?: never; auction?: never }
  | { unknown?: never; trading?: any; halted?: never; auction?: never }
  | { unknown?: never; trading?: never; halted?: any; auction?: never }
  | { unknown?: never; trading?: never; halted?: never; auction?: any };

export type CorpAction = { noCorpAct?: any };

export type PriceType = { unknown?: any; price?: never } | { unknown?: never; price?: any };

export type SwapType =
  | { normalSwap?: any; stableSwap?: never; serumSwap?: never }
  | { normalSwap?: never; stableSwap?: any; serumSwap?: never }
  | { normalSwap?: never; stableSwap?: never; serumSwap?: any };

export interface DeltafiUser {
  bump: number;
  configKey: PublicKey;
  owner: PublicKey;
  referrer: PublicKey;
  owedSwapRewards: anchor.BN;
  claimedSwapRewards: anchor.BN;
  owedReferralRewards: anchor.BN;
  claimedReferralRewards: anchor.BN;
  reserved: Array<any>;
}

export interface FarmInfo {
  bump: number;
  seed: PublicKey;
  configKey: PublicKey;
  swapKey: PublicKey;
  stakedBaseShare: anchor.BN;
  stakedQuoteShare: anchor.BN;
  farmConfig: FarmConfig;
  reserved: Array<any>;
}

export interface MarketConfig {
  version: number;
  bump: number;
  seed: PublicKey;
  adminKey: PublicKey;
  deltafiMint: PublicKey;
  deltafiToken: PublicKey;
  pythProgramId: PublicKey;
  serumProgramId: PublicKey;
  reservedU64: Array<any>;
}

export interface SwapInfo {
  isInitialized: boolean;
  bump: number;
  seed: PublicKey;
  swapType: SwapType;
  configKey: PublicKey;
  mintBase: PublicKey;
  mintQuote: PublicKey;
  tokenBase: PublicKey;
  tokenQuote: PublicKey;
  adminFeeTokenBase: PublicKey;
  adminFeeTokenQuote: PublicKey;
  mintBaseDecimals: number;
  mintQuoteDecimals: number;
  pythPriceBase: PublicKey;
  pythPriceQuote: PublicKey;
  serumMarket: PublicKey;
  serumBids: PublicKey;
  serumAsks: PublicKey;
  poolState: PoolState;
  swapConfig: SwapConfig;
  reservedU64: Array<any>;
}

export interface LiquidityProvider {
  bump: number;
  configKey: PublicKey;
  swapKey: PublicKey;
  owner: PublicKey;
  baseShare: anchor.BN;
  quoteShare: anchor.BN;
  basePosition: FarmPosition;
  quotePosition: FarmPosition;
  reserved: Array<any>;
}

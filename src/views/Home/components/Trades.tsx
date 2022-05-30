import { Box, Avatar } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPoolStateThunk, PoolStateInfo } from "states/poolState";
import { poolStateSelector } from "states/store";
import styled, { keyframes } from "styled-components";
import { scheduleWithInterval } from "util/utils";

const GradientCt = styled(Box)`
  padding: 1px;
  border-radius: 10px;
  background: linear-gradient(111.31deg, #d4ff00 15.34%, #bdff00 95.74%);
  &.avatarBorder {
    border-radius: 15px;
  }
`;
const GradientContent = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 18px 20px;
  border-radius: 10px;
  color: #fff;
  background: #1c1c1c;
`;

const StyledAvatar = styled(Avatar)`
  background: #fff;
  width: 30px;
  height: 30px;
`;
const transition = keyframes`
  0% {transform: translate3d(0, 0, 0);}
  100% {transform: translate3d(-1920px, 0, 0);}
`;
const AnimateContainer = styled(Box)`
  display: flex;
  width: 3840px;
  animation: ${transition} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

// const AnimateContainer = styled(Box)`
//   display: flex;
// `;

const filledUpPoolList = (poolStateList: PoolStateInfo[]) => {
  if (!poolStateList || poolStateList.length === 0) {
    return [];
  }
  const repeat = Math.floor(14 / poolStateList.length);
  console.log(repeat);
  return new Array(repeat).fill(poolStateList).flat();
};

const deploymentMode = process.env.REACT_APP_DEPLOYMENT_MODE || "mainnet-prod";

const Trades = () => {
  const dispatch = useDispatch();
  useEffect(() => scheduleWithInterval(() => dispatch(fetchPoolStateThunk(deploymentMode)), 5 * 1000), [dispatch]);

  const pools = useSelector(poolStateSelector);
  const fullPoolsList = filledUpPoolList(pools);
  return (
    <Box position="relative">
      <AnimateContainer flexWrap="nowrap" gap={2.5} mt={{ xs: 1.5, md: 2.5 }}>
        {fullPoolsList.map((poolConfig, idx) => (
          <GradientCt key={idx} height={90} sx={{ minWidth: 300 }} fontSize={12} fontWeight={500} textAlign="end">
            <GradientContent display="flex" justifyContent="space-between" alignContent="space-between">
              <Box display="flex" justifyContent="space-between" flexDirection="column">
                <Box display="flex" alignItems="self-start">
                  <GradientCt className="avatarBorder">
                    <StyledAvatar src={poolConfig.baseToken.logoURI} />
                  </GradientCt>
                  <GradientCt ml={-0.5} className="avatarBorder" zIndex={30}>
                    <StyledAvatar src={poolConfig.quoteToken.logoURI} />
                  </GradientCt>
                </Box>
                <Box>
                  {poolConfig.baseToken.symbol} - {poolConfig.quoteToken.symbol}
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" flexDirection="column">
                <Box color="#BDFF00">APY {poolConfig.apy}</Box>
                <Box>Liquidity {poolConfig.liquidity} </Box>
              </Box>
            </GradientContent>
          </GradientCt>
        ))}
      </AnimateContainer>
    </Box>
  );
};

export default Trades;

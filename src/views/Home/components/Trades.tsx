import { Box, Avatar } from "@mui/material";
import BigNumber from "bignumber.js";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPoolStateThunk, PoolStateInfo } from "states/poolState";
import styled, { keyframes } from "styled-components";
import { scheduleWithInterval, valueToDisplayFormat } from "util/utils";

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

const transition = keyframes`
  0% {transform: translate3d(0, 0, 0);}
  100% {transform: translate3d(-50%, 0, 0);}
  `;

const AnimateContainer = styled(Box)`
  display: flex;
  animation: ${transition} 20s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const StyledAvatar = styled(Avatar)`
  background: #fff;
  width: 30px;
  height: 30px;
`;

const filledUpPoolList = (poolStateList: PoolStateInfo[], length) => {
  if (!poolStateList || poolStateList.length === 0) {
    return [];
  }
  const repeat = Math.ceil(length / poolStateList.length);
  return new Array(repeat).fill(poolStateList).flat();
};

const deploymentMode = process.env.REACT_APP_DEPLOYMENT_MODE || "mainnet-prod";

const Trades = (props) => {
  const { pools } = props;
  const dispatch = useDispatch();
  useEffect(() => scheduleWithInterval(() => dispatch(fetchPoolStateThunk(deploymentMode)), 5 * 1000), [dispatch]);

  const ref = useRef<HTMLDivElement>();
  const [fullPoolList, setFullPoolList] = useState([]);

  useEffect(() => {
    setFullPoolList(filledUpPoolList(pools, Math.ceil(ref.current.clientWidth / 320) * 2));
  }, [pools]);
  
  return (
    <Box position="relative" overflow="hidden" ref={ref}>
      <AnimateContainer flexWrap="nowrap" gap={2.5} mt={{ xs: 1.5, md: 2.5 }} width={320 * fullPoolList.length} sx={{}}>
        {fullPoolList.map((poolConfig, idx) => (
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
                <Box>Liquidity {valueToDisplayFormat(new BigNumber(poolConfig.liquidity))} </Box>
              </Box>
            </GradientContent>
          </GradientCt>
        ))}
      </AnimateContainer>
    </Box>
  );
};

export default Trades;

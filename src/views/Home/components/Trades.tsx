import { Box, Avatar, Container } from "@mui/material";
import styled, { keyframes } from "styled-components";

const mockPools = [
    {
        baseToken: {
            logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
            symbol: "USDC"
        },
        quoteToken: {
            logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
            symbol: "SOL"
        },
        liquidity: 1233,
        apy: 10
    },
    {
        baseToken: {
            logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
            symbol: "USDC"
        },
        quoteToken: {
            logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
            symbol: "SOL"
        },
        liquidity: 1233,
        apy: 10
    },
]
const pools = [...mockPools, ...mockPools, ...mockPools, ...mockPools, ...mockPools, ...mockPools]
const GradientCt = styled(Box)`
    padding: 1px;
    border-radius: 10px;
    background: linear-gradient(111.31deg, #d4ff00 15.34%, #bdff00 95.74%);
    &.avatarBorder {
        border-radius: 15px;
    }
`
const GradientContent = styled(Box)`
    width: 100%;
    height: 100%;
    padding: 18px 20px;
    border-radius: 10px;
    color: #fff;
    background: #1c1c1c;
`

const StyledAvatar = styled(Avatar)`
    background: #fff;
    width: 30px;
    height: 30px;
`
const transition = keyframes`
  0% {transform: translate3d(0, 0, 0);}
  45% {transform: translate3d(-960px, 0, 0);}
  90% {transform: translate3d(-1920px, 0, 0);}
  100% {transform: translate3d(0, 0, 0);}
`
const AnimateContainer = styled(Box)`
  overflow: hidden;
  display: flex;
  width: 200%;
  min-width: 3000px;
  ${({ theme }) => theme.muibreakpoints.down("sm")} {
    min-width: 1000px;
  }
  animation: ${transition} 20s infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Trades = () => (
    <Container sx={{ overflow: "hidden" }}>
        <AnimateContainer flexWrap="nowrap" gap={2.5} mt={{ xs: 1.5, md: 2.5 }}>
            {pools.map((poolConfig, idx) =>
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
                            <Box
                            >{poolConfig.baseToken.symbol} - {poolConfig.quoteToken.symbol}</Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between" flexDirection="column">
                            <Box color="#BDFF00">APY {poolConfig.apy}%</Box>
                            <Box>Liquidity {poolConfig.liquidity}M</Box>
                        </Box>
                    </GradientContent>
                </GradientCt>
            )}
        </AnimateContainer>
    </Container>
);

export default Trades;
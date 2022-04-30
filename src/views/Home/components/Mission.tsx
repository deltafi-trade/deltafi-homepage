import { Grid, Box, Typography } from "@mui/material";
import styled from "styled-components";
import SectionContainer from "components/SectionContainer";
import Title from "components/Title";

const boxes = [{
    purpose: "FOR TRADERS",
    title: "Oracle Centered Pricing",
    color: "#D4FF00",
    content: "Powered by Pyth Network, realtime oracles achieves efficient token pricing.",
    image: "/images/scale.png"
},
{
    purpose: "FOR LIQUIDITY PROVIDERS",
    title: "Sustainable Profitaility",
    color: "#693EFF",
    content: "Innovative bond curve eliminates impermanent loss with pool rebalancing.",
    image: "/images/coin.png"
},
{
    purpose: "FOR MARKET MAKERS",
    title: "Customized Pools",
    color: "#03F2A0",
    content: "Professional market makers create customized pools for.",
    image: "/images/shakehand.png"
}]

const StyledItem = styled(Grid)`
    align-item: center;
    font-family: Rubik;
    display: flex;
    flex-deriction: column;
    justify-content: center;
`

const Mission: React.FC = () => {
    return (
        <SectionContainer>
            <Title
                header="Our Mission"
                title="Built for traders, liquidity providers and market makers" />
            <Grid container  spacing={2}>
                {boxes.map((box, i) =>
                <StyledItem key={i} container item md={4} xs={12}>
                    <Grid item>
                        <Box
                            sx={{
                                maxHeight: 384,
                                maxWidth: 384,
                                width: "100%"
                            }}
                            component="img"
                            src={box.image}
                        />
                    </ Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" fontWeight={400} >
                            {box.purpose}
                        </Typography>
                    </ Grid>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                color: box.color,
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: 24,
                                lineHeight: 1.1,
                                display: "flex",
                                height: 60,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <div>{box.title}</div>
                        </Box>
                    </ Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" textTransform="capitalize"
                            sx={{
                                lineHeight: 1.1,
                                height: 48,
                                maxWidth: 400,
                                margin: "auto"
                            }}
                        >
                            {box.content}
                        </Typography>
                    </ Grid>
                </ StyledItem>
                    
                )}
            </Grid>
        </SectionContainer>
    )
};

export default Mission;

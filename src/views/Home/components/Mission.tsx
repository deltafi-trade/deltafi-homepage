import { Grid, Box, Typography } from "@mui/material";
import styled from "styled-components";
import SectionContainer from "components/SectionContainer";
import Title from "components/Title";

const boxes = [{
    title: "Oracle Centered Pricing",
    color: "#D4FF00",
    content: "Pyth Network realtime oracles are used for fair prices.",
    image: "/images/scale.png"
},
{
    title: "Sustainable Liquidity Yields",
    color: "#693EFF",
    content: "Risk adjusted bond curve eliminates liquidity loss.",
    image: "/images/coin.png"
},
{
    title: "Native to Native Swap",
    color: "#03F2A0",
    content: "Wormhole protocol empowers cross chain swap.",
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
                header="Swap & Earn!"
                title="DeltaFi is built for traders and liquidity providers." />
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

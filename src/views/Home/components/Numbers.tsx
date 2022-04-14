import { Container, Grid, Paper, Typography } from "@mui/material"
import styled from "styled-components";

const Item = styled(Paper)`
    padding: ${({ theme }) => theme.spacing(1)};
    text-align: center;
    height: 320px;
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => theme.muibreakpoints.down("md")} {
        margin: auto;
        max-width: 580px;
    }
    background-repeat: no-repeat;
    background-size: cover;
    &.odd {
        background-image: url(/images/volume-bg-2.svg);
        h1 {
            color: ${({ theme }) => theme.palette.primary.main}
        }
    }
    &.even {
        h1 {
            color: ${({ theme }) => theme.palette.secondary.main}
        }
        background-image: url(/images/volume-bg.svg);
    }
    h1 {
        font-weight: 700;
    }
`;

const StyledContainer = styled(Container)`
    ${({ theme }) => theme.muibreakpoints.down("md")} {
        padding: ${({ theme }) => theme.spacing(3)};
    }
`

function Numbers() {
    return (
        <StyledContainer>
            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <Item className="odd">
                        <Typography variant="h1" component="h1">
                            $1.32B
                        </Typography>
                        <Typography variant="h5" fontWeight={600} >
                            Total assets supplied
                        </Typography>
                    </Item>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Item className="even">
                        <Typography variant="h1" component="h1">
                            $51M
                        </Typography>
                        <Typography variant="h5" fontWeight={600} >
                            Total Trading Volume
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </StyledContainer>
    )
};

export default Numbers;

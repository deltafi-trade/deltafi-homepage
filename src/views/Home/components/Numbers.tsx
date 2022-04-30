import { Container, Grid, Paper, Typography, Theme } from "@mui/material"
import styled from "styled-components";
import makeStyles from "@mui/styles/makeStyles";

const Item = styled(Paper)`
    padding: ${({ theme }) => theme.spacing(1)};
    text-align: center;
    height: 320px;
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => theme.muibreakpoints.down("sm")} {
        margin: auto;
        max-width: 580px;
        height: 160px
    }
    background-repeat: no-repeat;
    background: #313131;
    border-radius: 12px;
    &.odd {
        background-image: url(/images/volume-bg-2.svg);
        h1 {
            color: ${({ theme }) => theme.palette.primary.main}
        }
        background-position: 16% 70%;
    }
    &.even {
        h1 {
            color: ${({ theme }) => theme.palette.secondary.main}
        }
        background-image: url(/images/volume-bg.svg);
        background-position: 100% 70%;
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

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
    number: {
        [breakpoints.down("sm")]: {
            fontSize: "3rem"
        },
        [breakpoints.down("sm")]: {
            fontSize: "2rem"
        }
    },
    text: {
        [breakpoints.down("sm")]: {
            fontSize: 14
        }
    }
}))

function Numbers(props) {
    const classes = useStyles(props);

    return (
        <StyledContainer>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Item className="odd">
                        <Typography className={classes.number} variant="h1">
                            $1.32B
                        </Typography>
                        <Typography className={classes.text} variant="h5" fontWeight={600} >
                            Total assets supplied
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item className="even">
                        <Typography className={classes.number} variant="h1">
                            $51M
                        </Typography>
                        <Typography className={classes.text} variant="h5" fontWeight={600} >
                            Total Trading Volume
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </StyledContainer>
    )
};

export default Numbers;

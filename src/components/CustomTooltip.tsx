import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

const CustomDiv = styled.div`
    background-color: ${({ theme }) => theme.palette.background.secondary};
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.23);
    border-radius: 8px;
    border: none;
    font-size: 10px;
    width: 210px;
    padding: 12px;
`

interface Item {
    name: string,
    stroke: string,
    value: Number,
}

interface TooltipProps {
    active?: Boolean,
    payload?: Array<Item>,
    label?: String
}

const CustomTooltip = (props: TooltipProps) => {
    const { active, payload, label } = props;
    if (active && payload && payload.length) {
        return (
            <CustomDiv>
                <Typography fontSize={12}>{label}</Typography>
                {payload.map(item => (
                    <Grid key={item.name} container>
                        <Grid item xs={1.5}>
                            <svg width="14" height="14" viewBox="0 0 32 32">
                                <path strokeWidth="4" fill="none" stroke={item.stroke} d="M0,16h10.666666666666666
            A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
            H32M21.333333333333332,16
            A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"></path></svg></Grid>
                        <Grid item xs={8.5}><Typography fontSize={10} gutterBottom>{item.name}</Typography></Grid>
                        <Grid item xs={2}><Typography fontSize={10} gutterBottom>{item.value.toFixed(2)}%</Typography></Grid>
                    </Grid>))}
            </CustomDiv>
        );
    }

    return null;
};

export default CustomTooltip;
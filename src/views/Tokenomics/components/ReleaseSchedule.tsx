import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Title from "components/Title";
import CustomTooltip from "components/CustomTooltip";
import {
  CartesianGrid,
  Legend,
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

interface Data {
  year: number;
  month: string;
  ps: number;
  pi: number;
  ce: number;
  ta: number;
}
const labels = [2022, 2023, 2024, 2025, 2026, 2027, 2028]
  .flatMap((year) =>
    ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map(
      (month) => ({
        year,
        month,
      }),
    ),
  )
  .slice(2, 74); //generated label from 2022 MAR to 2028 FEB (total 6 * 12 invest)

const data: Array<Data> = labels.map((label) => ({
  year: label.year,
  month: label.month,
  label: `${label.year} ${label.month}`,
  ce: 0,
  pi: 18,
  ta: 15,
  ps: 1,
}));

for (let i = 0; i < 12; i++) {
  data[i].ce = (19.5 / 12) * (i + 1);
}
for (let i = 12; i < 24; i++) {
  data[i].ce = 19.5 + ((2.5 + 9 + 4) / 12) * (i - 11);
}
for (let i = 24; i < 36; i++) {
  data[i].ce = 35 + (11 / 12) * (i - 23);
}
for (let i = 36; i < 48; i++) {
  data[i].ce = 46 + (10 / 12) * (i - 35);
}
for (let i = 48; i < 60; i++) {
  data[i].ce = 56 + (8 / 12) * (i - 47);
}
for (let i = 60; i < 72; i++) {
  data[i].ce = 64 + (2 / 12) * (i - 59);
}

for (let i = 0; i < 48; i++) {
  data[i].ta = (15 / 48) * (i + 1);
}
for (let i = 0; i < 3; i++) {
  data[i].ps = (1 / 3) * (i + 1);
}
for (let i = 0; i < 24; i++) {
  data[i].pi = (18 / 24) * (i + 1);
}

const toPercent = (decimal, fixed = 2) => `${decimal.toFixed(fixed)}%`;

const LegendUl = styled.ul`
  margin: 0;
  padding: 0;
`;
const LegendLi = styled.li`
  display: inline-flex;
  line-height: 100%;
  margin-right: 35px;
  ${({ theme }) => theme.muibreakpoints.down("sm")} {
    display: flex;
  }
`;

const StyledCt = styled(ResponsiveContainer)`
  margin-top: 60px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border-radius: 20px;
`;

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <LegendUl>
      {payload.map((entry, index) => (
        <LegendLi key={`item-${index}`}>
          <svg width="14" height="14" viewBox="0 0 32 32">
            <path
              strokeWidth="4"
              fill="none"
              stroke={entry.color}
              d="M0,16h10.666666666666666
A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
H32M21.333333333333332,16
A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"
            ></path>
          </svg>
          <Typography fontSize={10} marginLeft={1}>
            {entry.value}
          </Typography>
        </LegendLi>
      ))}
    </LegendUl>
  );
};

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text fontSize={10} x={0} y={0} dy={2} textAnchor="end" fill="#666" transform="rotate(-90)">
        {payload.value}
      </text>
    </g>
  );
};

const ReleaseSchedule: React.FC = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Title size="small" header="Release Schedule" />
      <Box sx={{ display: { sm: "block" } }}>
        <StyledCt width="100%" height={450}>
          <AreaChart
            data={data}
            margin={{
              top: 50,
              right: 50,
              left: 50,
              bottom: 100,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgba(255, 255, 255, 0.2)"
            />
            <XAxis
              tick={<CustomizedAxisTick />}
              interval="preserveStart"
              tickLine={false}
              dataKey="label"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(decimal) => toPercent(decimal, 2)}
            />
            <Tooltip
              content={<CustomTooltip />}
              formatter={(decimal) => `${Number(decimal).toFixed(2)}%`}
              labelStyle={{ display: "none" }}
            />
            <Legend
              wrapperStyle={{ top: isMobile ? 30 : 40 }}
              verticalAlign="top"
              align="left"
              height={isMobile ? 80 : 50}
              content={renderLegend}
            />
            <Area
              type="monotone"
              stackId="1"
              name="Public Sale"
              dataKey="ps"
              stroke="#2F80ED"
              fill="rgba(47, 128, 237, 0.2)"
            />
            <Area
              type="monotone"
              stackId="1"
              name="Private Investors"
              dataKey="pi"
              stroke="#D4FF00"
              fill="rgba(212, 255, 0, 0.2)"
            />
            <Area
              type="monotone"
              stackId="1"
              name="Team & Advisors"
              dataKey="ta"
              stroke="#03F2A0"
              fill="rgba(26, 250, 154, 0.2)"
            />
            <Area
              type="monotone"
              stackId="1"
              name="Community & Ecosystem"
              dataKey="ce"
              stroke="#693EFF"
              fill="rgba(153, 69, 253, 0.2)"
            />
          </AreaChart>
        </StyledCt>
      </Box>
    </Container>
  );
};
export default ReleaseSchedule;

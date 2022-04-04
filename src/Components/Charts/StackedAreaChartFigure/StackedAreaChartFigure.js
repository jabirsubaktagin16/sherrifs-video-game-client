import React from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../../CustomHook/useChart";

const StackedAreaChartFigure = () => {
  const [chartData, setChartData] = useChart();
  return (
    <AreaChart
      width={500}
      height={400}
      data={chartData}
      margin={{
        top: 5,
        right: 20,
        left: 30,
        bottom: 5,
      }}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="investment"
        stackId="1"
        stroke="#5502bd"
        fill="#5502bd"
      />
      <Area
        type="monotone"
        dataKey="revenue"
        stackId="1"
        stroke="#e63946"
        fill="#e63946"
      />
    </AreaChart>
  );
};

export default StackedAreaChartFigure;

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
        stroke="#118ab2"
        fill="#118ab2"
      />
      <Area
        type="monotone"
        dataKey="revenue"
        stackId="1"
        stroke="#ef476f"
        fill="#ef476f"
      />
    </AreaChart>
  );
};

export default StackedAreaChartFigure;

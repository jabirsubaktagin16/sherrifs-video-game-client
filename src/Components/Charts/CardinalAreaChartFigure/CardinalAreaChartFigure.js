import { curveCardinal } from "d3-shape";
import React from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "./../../../CustomHook/useChart";

const CardinalAreaChartFigure = () => {
  const [chartData, setChartData] = useChart();
  const cardinal = curveCardinal.tension(0.2);
  return (
    <AreaChart
      width={500}
      height={400}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="investment"
        stroke="#118ab2"
        fill="#118ab2"
        fillOpacity={0.3}
      />
      <Area
        type={cardinal}
        dataKey="revenue"
        stroke="#ef476f"
        fill="#ef476f"
        fillOpacity={0.3}
      />
    </AreaChart>
  );
};

export default CardinalAreaChartFigure;

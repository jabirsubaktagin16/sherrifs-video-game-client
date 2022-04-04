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
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="sell"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.3}
      />
      <Area
        type={cardinal}
        dataKey="sell"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.3}
      />
    </AreaChart>
  );
};

export default CardinalAreaChartFigure;

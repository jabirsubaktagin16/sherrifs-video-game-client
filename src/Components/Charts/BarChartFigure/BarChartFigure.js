import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "./../../../CustomHook/useChart";

const BarChartFigure = () => {
  const [chartData, setChartData] = useChart();
  return (
    <BarChart
      width={500}
      height={300}
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
      <Legend />
      <Bar dataKey="sell" fill="#8884d8" />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarChartFigure;

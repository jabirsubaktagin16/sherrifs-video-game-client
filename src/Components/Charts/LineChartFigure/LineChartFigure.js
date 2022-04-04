import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "./../../../CustomHook/useChart";

const LineChartFigure = () => {
  const [chartData, setChartData] = useChart();
  return (
    <LineChart
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
      <Line
        type="monotone"
        dataKey="sell"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineChartFigure;

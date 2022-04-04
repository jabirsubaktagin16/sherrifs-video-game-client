import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "./../../../CustomHook/useChart";

const LineChartFigure = () => {
  const [chartData, setChartData] = useChart();
  return (
    <LineChart
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
      <Legend />
      <Line
        type="monotone"
        dataKey="investment"
        stroke="#118ab2"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="revenue" stroke="#ef476f" />
    </LineChart>
  );
};

export default LineChartFigure;

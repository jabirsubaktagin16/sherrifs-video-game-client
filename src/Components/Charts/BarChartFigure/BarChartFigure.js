import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "./../../../CustomHook/useChart";

const BarChartFigure = () => {
  const [chartData, setChartData] = useChart();
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#5502bd" />
          <Bar dataKey="revenue" stackId="a" fill="#e63946" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartFigure;

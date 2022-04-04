import React from "react";
import { Pie, PieChart } from "recharts";
import useChart from "./../../../CustomHook/useChart";

const PieChartFigure = () => {
  const [chartData, setChartData] = useChart();
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="revenue"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={chartData}
        dataKey="sell"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
};

export default PieChartFigure;

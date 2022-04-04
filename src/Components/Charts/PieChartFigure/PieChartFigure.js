import React from "react";
import { Pie, PieChart } from "recharts";
import useChart from "./../../../CustomHook/useChart";

const PieChartFigure = () => {
  const [chartData, setChartData] = useChart();
  return (
    <PieChart width={500} height={400}>
      <Pie
        data={chartData}
        dataKey="revenue"
        cx={250}
        cy={200}
        outerRadius={120}
        fill="#e63946"
      />
      <Pie
        data={chartData}
        dataKey="investment"
        cx={250}
        cy={200}
        innerRadius={130}
        outerRadius={150}
        fill="#5502bd"
        label
      />
    </PieChart>
  );
};

export default PieChartFigure;

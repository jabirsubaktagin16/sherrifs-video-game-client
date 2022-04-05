import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import useChart from "./../../../CustomHook/useChart";

const PieChartFigure = () => {
  const [chartData, setChartData] = useChart();
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="revenue"
            cx={"50%"}
            cy={200}
            outerRadius={80}
            fill="#e63946"
          />
          <Pie
            data={chartData}
            dataKey="investment"
            cx={"50%"}
            cy={200}
            innerRadius={90}
            outerRadius={110}
            fill="#5502bd"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartFigure;

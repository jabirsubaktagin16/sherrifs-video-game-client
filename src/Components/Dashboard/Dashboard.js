import React from "react";
import BarChartFigure from "../Charts/BarChartFigure/BarChartFigure";
import CardinalAreaChartFigure from "../Charts/CardinalAreaChartFigure/CardinalAreaChartFigure";
import LineChartFigure from "../Charts/LineChartFigure/LineChartFigure";
import PieChartFigure from "../Charts/PieChartFigure/PieChartFigure";
import useChart from "./../../CustomHook/useChart";
import "./Dashboard.css";

const Dashboard = () => {
  const [chartData, setChartData] = useChart();
  return (
    <section className="container">
      <h1 className="text-center">Dashboard</h1>
      <div className="row row-cols-1 row-cols-md-2 g-5 mb-2 px-5">
        <div className="col">
          <div className="chart p-3 h-100">
            <h2 className="text-center">Bar Chart</h2>
            <BarChartFigure />
          </div>
        </div>
        <div className="col">
          <div className="chart p-3 h-100">
            <h2 className="text-center">Pie Chart</h2>
            <PieChartFigure />
          </div>
        </div>
        <div className="col">
          <div className="chart p-3 h-100">
            <h2 className="text-center">Line Chart</h2>
            <LineChartFigure />
          </div>
        </div>
        <div className="col">
          <div className="chart p-3 h-100">
            <h2 className="text-center">Cardinal Area Chart</h2>
            <CardinalAreaChartFigure />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

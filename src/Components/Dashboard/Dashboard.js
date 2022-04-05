import React from "react";
import BarChartFigure from "../Charts/BarChartFigure/BarChartFigure";
import LineChartFigure from "../Charts/LineChartFigure/LineChartFigure";
import PieChartFigure from "../Charts/PieChartFigure/PieChartFigure";
import StackedAreaChartFigure from "./../Charts/StackedAreaChartFigure/StackedAreaChartFigure";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="container">
      <h1 className="text-center" style={{ fontSize: "3.5rem" }}>
        Dashboard
      </h1>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-5 mb-5">
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
            <h2 className="text-center">Stacked Area Chart</h2>
            <StackedAreaChartFigure />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

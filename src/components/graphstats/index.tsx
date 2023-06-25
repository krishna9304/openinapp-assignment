"use client";
import "chart.js/auto";
import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./graphstats.module.scss";
import {
  BubbleDataPoint,
  ChartData,
  CoreChartOptions,
  Point,
} from "chart.js/auto";
import { _DeepPartialObject } from "chart.js/dist/types/utils";

interface GraphStatsProps {}

export const GraphStats: React.FC<GraphStatsProps> = () => {
  return (
    <div className={classes.graph__container}>
      <div className={classes.graph__main}>
        <LineChart />
      </div>
    </div>
  );
};

const data: ChartData<
  "line",
  (number | [number, number] | Point | BubbleDataPoint | null)[],
  unknown
> = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Curve 1",
      data: [110, 405, 230, 320],
      borderColor: "#E9A0A0",
      fill: false,
      tension: 0.35,
    },
    {
      label: "Curve 2",
      data: [225, 455, 110, 440],
      borderColor: "#9BDD7C",
      fill: false,
      tension: 0.35,
    },
  ],
};

const options: CoreChartOptions<"line"> | any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 500,
      ticks: {
        stepSize: 100,
        callback: (value: number) => {
          return value === 0 ? value : `${value}`;
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const LineChart = () => {
  return (
    <div className={classes.chart__container}>
      <Line
        style={{
          width: "100%",
        }}
        data={data}
        options={options}
      />
    </div>
  );
};

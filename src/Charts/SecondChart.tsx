/* import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const SecondChart = ({ data, second }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((item) => item.label),
        datasets: [
          {
            label: "My Data",
            data: data.map((item) => item.value),
            backgroundColor: data.map(
              (item) => item.color || "rgba(255, 99, 132, 0.2)"
            ),
            fill: true,
          },
          {
            label: "My Data",
            data: second.map((item) => item.value),
            backgroundColor: data.map(
              (item) => item.color || "rgba(255, 99, 132, 0.2)"
            ),
            fill: true,
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    return () => myChart.destroy(); // Cleanup function
  }, [data]);

  return <canvas ref={chartRef} width={600} height={400} />;
};

export default SecondChart; */

import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface SecondChartData {
  label: string;
  value: number;
  color: string;
}

interface SecondChartProps {
  data: SecondChartData[];
}

const SecondChart: React.FC<SecondChartProps> = ({ data, second }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: data.map((item) => item.label),
            datasets: [
              {
                label: "My Data",
                data: data.map((item) => item.value),
                backgroundColor: data.map(
                  (item) => item.color || "rgba(255, 99, 132, 0.2)"
                ),
              },
              {
                label: "My Data",
                data: second.map((item) => item.value),
                backgroundColor: data.map(
                  (item) => item.color || "rgba(255, 99, 132, 0.2)"
                ),
              },
            ],
          },
          options: {
            indexAxis: "y",
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                },
              },
            },
          },
        });

        return () => myChart.destroy();
      }
    }
  }, [data, second]);

  return <canvas ref={chartRef} width={600} height={400} />;
};

export default SecondChart;

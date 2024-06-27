import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto"; // Import the auto plugin for automatic chart type detection

interface BarChartData {
  label: string;
  value: number;
}

interface BarChartProps {
  data: BarChartData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: data.map((item) => item.label),
            datasets: [
              {
                label: "Employee",
                backgroundColor: "#caf270",
                data: [12, 59, 5, 56, 58, 12, 59, 87, 45],
              },
              {
                label: "Engineer",
                backgroundColor: "#45c490",
                data: [12, 59, 5, 56, 58, 12, 59, 85, 23],
              },
              {
                label: "Government",
                backgroundColor: "#008d93",
                data: [12, 59, 5, 56, 58, 12, 59, 65, 51],
              },
              {
                label: "Political parties",
                backgroundColor: "#2e5468",
                data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
              },
            ],
          },
          options: {
            plugins: {
              tooltip: {
                displayColors: true,
                intersect: false,
                mode: "index",
              },
              legend: {
                position: "bottom",
              },
            },

            scales: {
              x: {
                stacked: true,
                grid: {
                  display: false,
                },
              },
              y: {
                stacked: true,
                beginAtZero: true,
                type: "linear",
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
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default BarChart;

/* import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto"; // Import the auto plugin for automatic chart type detection

interface DoubleData {
  label: string;
  value: number;
}

interface DoubleProps {
  data: DoubleData[];
}

const Double: React.FC<DoubleProps> = ({ data }) => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

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
                backgroundColor: "red",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
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

export default Double; */
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto"; // Import the auto plugin for automatic chart type detection

interface DoubleData {
  label: string;
  value: number;
}

interface DoubleProps {
  data: DoubleData[];
}

const Double: React.FC<DoubleProps> = ({ data }) => {
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
                backgroundColor: "red",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: "gray",
                },
              },
              x: {
                beginAtZero: true,
                grid: {
                  color: "gray",
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

export default Double;

import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Line = ({ data, options }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "polarArea",
          data: {
            labels: data.map((item) => item.label),
            datasets: [
              {
                label: "My Data",
                data: data.map((item) => item.value),

                fill: true,
              },
            ],
          },
          options: {
            indexAxis: "x",
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
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  font: {
                    size: 14, // Font size
                    family: "Arial", // Font family
                    weight: "bold", // Font weight
                  },
                  color: "#ff6384", // Font color
                  padding: 100, // Padding around labels
                  boxWidth: 20, // Width of the box
                  boxHeight: 20, // Height of the box
                },
              },
              tooltip: {
                enabled: false,
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

export default Line;

/* import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Line = ({ data, options }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "polarArea",
          data: {
            labels: data.map((item) => item.label),
            datasets: [
              {
                label: "My Data",
                data: data.map((item) => item.value),
                fill: true,
              },
            ],
          },
          options: {
            indexAxis: "x",
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
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
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

export default Line; */

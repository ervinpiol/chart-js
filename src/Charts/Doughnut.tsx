import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Doughnut = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "pie",
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
        ],
      },
    });

    return () => myChart.destroy(); // Cleanup function
  }, [data]);

  return <canvas ref={chartRef} width={600} height={400} />;
};

export default Doughnut;

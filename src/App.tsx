import BarChart from "./Charts/BarChart";
import Double from "./Charts/Double";
import Doughnut from "./Charts/Doughnut";
import Line from "./Charts/Line";
import SecondChart from "./Charts/SecondChart";

const App = () => {
  const MyData = [
    { label: "Item 1", value: 50 },
    { label: "Item 2", value: 80 },
    { label: "Item 3", value: 30 },
  ];

  const SData = [
    { label: "Item 9", value: 89, color: "green" },
    { label: "Item 8", value: 71, color: "green" },
    { label: "Item 7", value: 62, color: "green" },
    { label: "Item 6", value: 55, color: "red" },
    { label: "Item 5", value: 41, color: "blue" },
    { label: "Item 4", value: 38, color: "blue" },
    { label: "Item 3", value: 20, color: "blue" },
    { label: "Item 2", value: 12, color: "blue" },
    { label: "Item 1", value: 0, color: "blue" },
  ];
  const SsData = [
    { label: "Item 9", value: 94, color: "green" },
    { label: "Item 8", value: 75, color: "green" },
    { label: "Item 7", value: 62, color: "green" },
    { label: "Item 6", value: 59, color: "red" },
    { label: "Item 5", value: 40, color: "blue" },
    { label: "Item 4", value: 32, color: "blue" },
    { label: "Item 3", value: 22, color: "blue" },
    { label: "Item 2", value: 13, color: "blue" },
    { label: "Item 1", value: 0, color: "blue" },
  ];

  const DoughnutData = [
    { label: "Item 1", value: 300, color: "red" },
    { label: "Item 2", value: 50, color: "green" },
    { label: "Item 3", value: 100, color: "blue" },
  ];

  const LineData = [
    { label: "Item 1", value: 0, color: "red" },
    { label: "Item 2", value: 18, color: "green" },
    { label: "Item 3", value: 27, color: "blue" },
    { label: "Item 4", value: 37, color: "blue" },
    { label: "Item 5", value: 25, color: "blue" },
    { label: "Item 6", value: 56, color: "blue" },
    { label: "Item 7", value: 70, color: "blue" },
    { label: "Item 8", value: 65, color: "blue" },
    { label: "Item 9", value: 90, color: "blue" },
    { label: "Item 10", value: 100, color: "blue" },
  ];

  return (
    <div className="w-screen p-10">
      <div className="grid w-full grid-cols-2">
        <div className="w-[800px]">
          <Line data={LineData} />
        </div>
        <div className="w-[800px]">
          <Doughnut data={DoughnutData} />
        </div>
        <div className="w-[800px]">
          <BarChart data={MyData} />
        </div>
        <div className="w-[800px]">
          <Double data={SData} />
        </div>
        <div className="w-[800px]">
          <SecondChart data={SData} second={SsData} />
        </div>
      </div>
    </div>
  );
};

export default App;

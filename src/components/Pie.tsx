import Chart from "react-google-charts";
import { BuildDataFromApplications } from "../lib/utils";

export default function Pie() {
  const { pie } = BuildDataFromApplications();

  return (
    <Chart
      chartType="PieChart"
      data={pie}
      options={{ title: "Applications" }}
      width="400px"
      height="400px"
    />
  );
}

import Chart from "react-google-charts";
import { BuildDataFromApplications } from "../lib/utils";

export const Sankey = () => {
  const { sankey } = BuildDataFromApplications();
  return (
    <Chart
      chartType="Sankey"
      width="800px"
      height="200px"
      data={sankey}
      legendToggle
    />
  );
};

import Chart from "react-google-charts";
import { BuildDataFromApplications } from "../lib/utils";

export const options = {};

export const Sankey = () => {
  const { sankey } = BuildDataFromApplications();
  return (
    <Chart
      chartType="Sankey"
      width="300px"
      height="300px"
      data={sankey}
      options={options}
    />
  );
};

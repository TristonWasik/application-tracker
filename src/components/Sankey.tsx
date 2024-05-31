import Chart from "react-google-charts";
import { BuildDataFromApplications } from "../lib/utils";

export const Sankey = () => {
  const { sankey } = BuildDataFromApplications();
  return <Chart chartType="Sankey" width="800px" data={sankey} legendToggle />;
};

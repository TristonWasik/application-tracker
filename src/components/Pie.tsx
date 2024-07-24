import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { BuildDataFromApplications } from "../lib/utils";

const COLORS = {
  Accepted: "#2f855a",
  Interviewed: "#6b46c1",
  Rejected: "#c53030",
  Default: "#2b6cb0",
  Assessment: "#2c7a7b",
  "Pending Interview": "#5aaca0",
};

/**
 * Pie chart component to display a breakdown of current application statuses
 */
export default function PieChartComponent() {
  const { pie } = BuildDataFromApplications();

  return (
    <div data-testid="pieChart">
      <PieChart width={300} height={300}>
        <Tooltip />
        <Legend />
        <Pie
          dataKey="count"
          label
          fill="#82ca9d"
          data={pie
            .filter((f) => f[1] > 0)
            .map((item) => ({ name: item[0].toString(), count: item[1] }))}
        >
          {pie
            .filter((f) => f[1] > 0)
            .map((entry) => {
              let color = "";
              switch (entry[0].toString()) {
                case "Accepted":
                  color = COLORS.Accepted;
                  break;
                case "Interviewed":
                  color = COLORS.Interviewed;
                  break;
                case "Rejected":
                  color = COLORS.Rejected;
                  break;
                case "Assessment":
                  color = COLORS.Assessment;
                  break;
                case "Pending Interview":
                  color = COLORS["Pending Interview"];
                  break;
                default:
                  color = COLORS.Default;
              }
              return <Cell key={entry[0]} fill={color} />;
            })}
        </Pie>
      </PieChart>
    </div>
  );
}

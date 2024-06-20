import { applications } from "@/lib/applications";
import { LineChartDataPoint } from "@/lib/types";
import { format } from "date-fns/format";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/**
 * Build out the data for our line chart
 * @returns data
 */
const buildLineChartData = () => {
  let results: LineChartDataPoint[] = [];

  // loop 31 times for each potential day in a month
  for (const day of Array.from(new Array(31), (_, i) => i + 1)) {
    let result: LineChartDataPoint = { day };

    // filter our apps for any on that particular day of the month
    const apps = applications.filter(
      (f) => f.appliedAt.split("/")[1] === day.toString()
    );

    // skip the date if we dont have any apps to eliminate unnecessary columns
    if (apps.length === 0) continue;

    // for each unique month for the given date, calculate the total apps
    for (const month of [
      ...new Set(apps.map((app) => app.appliedAt.split("/")[0])),
    ]) {
      const thisMonthsApps = apps.filter(
        (f) => f.appliedAt.split("/")[0] === month
      );
      const monthName = format(thisMonthsApps[0].appliedAt, "LLL");

      // assign the length of apps for the given month
      Object.assign(result, { [monthName]: thisMonthsApps.length });
    }

    results.push(result);
  }

  return results;
};

/**
 * Line chart component to display applications per day. Does not display a column for days where no app was put in.
 */
export default function LineChartComponent() {
  const data = buildLineChartData();
  return (
    <div className="flex flex-col items-center">
      <h2>Applications Per Day</h2>
      <LineChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip contentStyle={{ color: "red" }} />
        <Legend />
        <Line type="monotone" dataKey="May" stroke="#8884d8" />
        <Line type="monotone" dataKey="Jun" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

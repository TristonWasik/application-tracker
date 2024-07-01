import { applications } from "@/lib/applications";
import { LineChartDataPoint } from "@/lib/types";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const getMonthFromNumber = (num: number | string) => {
  const numToTest = typeof num === "number" ? num : parseInt(num);
  switch (numToTest) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      throw new Error("Invalid number");
  }
};

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

    // for each unique month for the given date, calculate the total apps
    for (const month of [
      ...new Set(applications.map((app) => app.appliedAt.split("/")[0])),
    ]) {
      const monthName = getMonthFromNumber(month);

      if (apps.length === 0) {
        Object.assign(result, { [monthName]: 0 });
      } else {
        const thisMonthsApps = apps.filter(
          (f) => f.appliedAt.split("/")[0] === month
        );

        // assign the length of apps for the given month
        Object.assign(result, { [monthName]: thisMonthsApps.length });
      }
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
        <Line type="monotone" dataKey="Jul" stroke="#A882CA" />
      </LineChart>
    </div>
  );
}

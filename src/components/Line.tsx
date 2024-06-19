import { applications } from "@/lib/applications";
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

const getUniqueDates = () => {
  return [...new Set(applications.map((app) => app.appliedAt))];
};

const buildLineChartData = () => {
  const uniqueDates = getUniqueDates();
  let stats = [];

  for (const date of uniqueDates.reverse()) {
    const monthName = format(new Date(date), "LLL");
    const count = applications.reduce((acc, app) => {
      return app.appliedAt === date ? (acc += 1) : acc;
    }, 0);
    let statsObj = { date, [monthName]: count, day: new Date(date).getDate() };
    stats.push(statsObj);
  }

  return stats.sort((a, b) => (a.day > b.day ? 1 : -1));
};

export default function LineChartComponent() {
  const data = buildLineChartData();
  return (
    <LineChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="May" stroke="#8884d8" />
      <Line type="monotone" dataKey="Jun" stroke="#82ca9d" />
    </LineChart>
  );
}

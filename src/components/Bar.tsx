import { applications } from "@/lib/applications";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/**
 * Build our funnel chart data based on the following tiers.
 * Low - <= 80k
 * Medium - <= 120k
 * High - <= 180k
 * Very High - > 180k
 * @returns
 */
const buildFunnelChartData = () => {
  const appsWithSalaries = applications.filter((f) => !!f.salary);

  const lowTierMin = appsWithSalaries.filter((f) => f.salary!.min <= 80000);
  const mediumTierMin = appsWithSalaries.filter(
    (f) => f.salary!.min > 80000 && f.salary!.min <= 120000
  );
  const highTierMin = appsWithSalaries.filter(
    (f) => f.salary!.min > 120000 && f.salary!.min <= 180000
  );
  const vhighTierMin = appsWithSalaries.filter((f) => f.salary!.min > 180000);

  const lowTierMax = appsWithSalaries.filter((f) => f.salary!.max <= 80000);
  const mediumTierMax = appsWithSalaries.filter(
    (f) => f.salary!.max > 80000 && f.salary!.max <= 120000
  );
  const highTierMax = appsWithSalaries.filter(
    (f) => f.salary!.max > 120000 && f.salary!.max <= 180000
  );
  const vhighTierMax = appsWithSalaries.filter((f) => f.salary!.min > 180000);

  return [
    {
      tier: "<= 80k",
      min: lowTierMin.length,
      max: lowTierMax.length,
    },
    {
      tier: "80k-120k",
      min: mediumTierMin.length,
      max: mediumTierMax.length,
    },
    {
      tier: "120k-180k",
      min: highTierMin.length,
      max: highTierMax.length,
    },
    {
      tier: "> 180k",
      min: vhighTierMin.length,
      max: vhighTierMax.length,
    },
  ];
};

export default function BarChartComponent() {
  const data = buildFunnelChartData();

  return (
    <div className="flex flex-col items-center">
      <h2>Min and Max Salaries By Tier</h2>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="tier" />
        <YAxis />
        <Tooltip contentStyle={{ color: "red" }} />
        <Legend />
        <Bar dataKey="min" fill="#8884d8" />
        <Bar dataKey="max" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

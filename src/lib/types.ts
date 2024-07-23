const foundAtOptions = [
  "linkedin",
  "indeed",
  "weworkremotely",
  "commitasync",
  "wellfound",
  "direct",
  "roberthalf",
  "calmjobs",
  "workatastartup",
] as const;
export type foundAt = (typeof foundAtOptions)[number];

export type Application = {
  name: string;
  foundAt: foundAt;
  role: string;
  website: string;
  assessmentAt?: string;
  status: status;
  appliedAt: string;
  interviewedAt?: string;
  rejectedAt?: string;
  acceptedAt?: string;
  notes?: string | string[];
  salary?: {
    min: number;
    max: number;
  };
};

const statusOptions = [
  "Applied",
  "Rejected",
  "Interviewed",
  "Assessment",
  "Offer",
  "Accepted",
] as const;
/**
 * Status of application
 * - Applied: the initial status
 * - Rejected: Received a rejection via email, phone, or whatever
 * - Interviewed: Have a scheduled interview or had one in the past
 * - Assessment: Took a takehome assessment
 * - Offer: The company offered the job
 * - Accepted: Accepted an offer
 */
export type status = (typeof statusOptions)[number];

export type PieSlice = [status | "No Response", number];
export type LineChartDataPoint = { [month: string]: number } & {
  date?: string;
  day: number;
};
